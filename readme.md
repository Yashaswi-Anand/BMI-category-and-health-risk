# BMI category and health risk

## _Only backend api using nodeJs_

Given JSON data stored in an array and if add more data then simply add in that array (not mongoDB) and perform some basic operations like calculate BMI, find person category as well as health risk using post and get APIs.

# BMI formula

## BMI(kg/m2) = mass(kg)/height(m2)

# Features
- add new person details
- fetch BMI details of each people
- find number of over weight people quickly

# Routes and how to start
- Project link: http://localhost:8000
- Add new person data: http://localhost:8000/addUserData
- Get BMI details of each people: http://localhost:8000/bmi
- Quicky see number of overweighted people: http://localhost:8000/noOfOverweightedPeople

# BMI Category
- Underweight 
- Normal weight 
- Overweight 
- Moderately obese 
- Severel obese 
- Very severely obese

# Challenge
  BMI Range (kg/m2)
- 18.4 and below 
- 18.5 - 24.9
- 25 - 29.9
- 30 - 34.9
- 35- 39.9
- 40 and above

# Health risk
- Malnutrition risk
- Low risk
- Enhanced risk
- Medium risk
- High risk
- Very high risk

# Tech
- NodeJs

# Project link
- Add new detail
![image](https://github.com/Yashaswi-Anand/BMI-category-and-health-risk/blob/master/screenshots/addUser.png)
- BMI details
![image](https://github.com/Yashaswi-Anand/BMI-category-and-health-risk/blob/master/screenshots/bmi.png)
- number of overweight people
![image](https://github.com/Yashaswi-Anand/BMI-category-and-health-risk/blob/master/screenshots/overweighted.png)

# Json Data

{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, {"Gender": "Male", "HeightCm": 161,
"WeightKg":85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70},{"Gender": "Female","HeightCm": 167, "WeightKg": 82} as the input with weight and height parameters of a person.
