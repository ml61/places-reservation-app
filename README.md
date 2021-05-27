Below you will see a little description and a few screenshots of the app.

### `npm run api` 
Runs the jsonServer

### `npm run api-test` 
Before running this, first jsonServer must be off. Runs the jsonServer, but this json has more seats (2 rows and 2 columns were added). I did it just for checking if scheme generates well with another quantity of seats.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

App can automatically generate seats for user (any free seat, or seats next to each other). Also user can add or delete seats from his reservation. User is not able to click Make Reservation before choosing min. 1 seat. After reservation user will see a Success Reservation Page (raport with numbers of seats, their ids etc). The state of the app is in the Local Storage, so user can refresh a page while choosing seats.

In this project were used: React, Redux, React-Router. Little styling was made with bootstrap.

Screenshots:
Welcome Page with form
![image](https://user-images.githubusercontent.com/74111728/119877694-a2c02d80-bf29-11eb-8656-c12810880b2e.png)

Automatically generated places due to user's requirements:
![image](https://user-images.githubusercontent.com/74111728/119877885-d8fdad00-bf29-11eb-9e83-dca7112e0d83.png)

Reservation-success, Raport:
![image](https://user-images.githubusercontent.com/74111728/119878035-fd598980-bf29-11eb-9dcb-5b3173d4cacf.png)

Example of db-test.json (I added a few seats, everything was generated correctly):
![image](https://user-images.githubusercontent.com/74111728/119878184-224dfc80-bf2a-11eb-89ab-96b53a53a073.png)

Example for the situation, if the hall is already full. (alert at the top of the page):
![image](https://user-images.githubusercontent.com/74111728/119878285-3d207100-bf2a-11eb-99d9-cf5830b8f541.png)

Example for the situation with not enough amount of free seats (6 seats next to each other is impossible for this hall scheme, the alert will be shown to user at the top of the page, which will close automatically after 5sec.):
![image](https://user-images.githubusercontent.com/74111728/119878484-7527b400-bf2a-11eb-9ffc-714b39f376ae.png)

Rzut LocalStorage:
![image](https://user-images.githubusercontent.com/74111728/119878519-8375d000-bf2a-11eb-859d-158f06e344c9.png)


Thank you for your attention :)












