'use-strict';

const regExpJiraTicket = /^(ux|devops)-[1-9][0-9]{0,5}$/gi;

const options = {
  scope: 'spa-auth',
  maxCommitWidth: 50,
};

module.exports = {
  prompter(cz, setCommit) {
    cz.prompt([
      {
        type: 'input',
        name: 'jiraTicket',
        message: 'Введите тег задачи в JIRA (например UX-123):',
        validate: (value) => {
          const trimValue = value.trim();

          if (!trimValue.length > 0) {
            return 'Обязательное поле.';
          }

          if (!regExpJiraTicket.test(trimValue)) {
            return 'Неверный формат.';
          }

          return true;
        },
        transformer: (subject) => subject.toUpperCase(),
        filter: (subject) => subject.trim().toUpperCase(),
      },
      {
        type: 'input',
        name: 'commit',
        message: `Краткое наименование коммита (не более ${options.maxCommitWidth}):\n`,
        validate: (value) => {
          const trimValue = value.trim();

          if (!trimValue.length > 0) {
            return 'Обязательное поле.';
          }

          if (trimValue.length > options.maxCommitWidth) {
            return 'Сократите коммит.';
          }

          return true;
        },
        filter: (subject) => subject.trim(),
      },
    ])
      .then((answers) => {
        const { jiraTicket, commit } = answers;
        const str = `[${jiraTicket}] ${commit}`;

        setCommit(str);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
