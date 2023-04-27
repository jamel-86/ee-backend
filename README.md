# Create cron job:

- localy crontab -e

1. sudo crontab -e
2. 30 21 \* \* \* /home/james/.nvm/versions/node/v16.13.1/bin/node /home/james/ee-backend/userBackup.js >> /home/james/ee-backend/backup.log 2>&1
   min | hour | day of month | month | day of week | \* wildcard |

# This will run the backup script at midnight, 4am, 8am, 12pm, 4pm, and 8pm.

- 0 0,4,8,12,16,20 \* \* \* /home/james/.nvm/versions/node/v16.13.1/bin/node /home/james/ee-backend/userBackup.js >> /home/james/ee-backend/backup.log 2>&1

# check if cron job is running:

1. ps -ef | grep cron
