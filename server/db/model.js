const db = require('./db');
const Sequelize = require('sequelize');

const Folder = db.define('folder', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

const Mail = db.define('mail', {
  subject: {
    type: Sequelize.STRING
  },
  recipient: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  sender: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  content: {
    type: Sequelize.TEXT
  }
});

Mail.belongsToMany(Folder, {through: 'folderMail'});
Folder.belongsToMany(Mail, {through: 'folderMail'});

module.exports = {
  Folder,
  Mail
}