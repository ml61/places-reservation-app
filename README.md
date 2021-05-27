Below you will see a little description and a few screenshots of the app.

### `npm run api` 
Runs the jsonServer

### `npm run api-test` 
Before running this, first jsonServer must be off. Runs the jsonServer, but this json has a little bit more seats (2 rows and 2 columns were added) to check if automatically generate of the Hall-scheme works well.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

App can automatically generate seats for user (any free seat, or seats next to each other). Also user can add or delete seats from his reservation. User is not able to click Make Reservation before choosing min. 1 seat. After reservation user will see a Success Reservation Page (raport with numbers of seats, their ids etc). The state of the app is in the Local Storage, so user can refresh a page while choosing seats.

In this project were used: React, Redux, React-Router. Little styling was made with bootstrap.

Screenshots:
![image](https://user-images.githubusercontent.com/74111728/119877694-a2c02d80-bf29-11eb-8656-c12810880b2e.png)









