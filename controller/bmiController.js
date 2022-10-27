const userData = [
    { "Gender": "Male", "HeightCm": 171, "WeightKg": 96 },
    { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 },
    { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 },
    { "Gender": "Female", "HeightCm": 166, "WeightKg": 62 },
    { "Gender": "Female", "HeightCm": 150, "WeightKg": 70 },
    { "Gender": "Female", "HeightCm": 167, "WeightKg": 82 },
]


const bmiCategoryAndHealthRisk = (bmi) => {
    // console.log(bmi);
    if (bmi <= 18.4) {
        return ['Underweight', 'Malnutrition risk']
    } else if (18.5 <= bmi && bmi < 24.9) {
        return ['Normal weight', 'Low risk']
    } else if (25.0 <= bmi && bmi < 29.9) {
        return ['Overweight', 'Enhanced risk']
    } else if (30.0 <= bmi && bmi < 34.9) {
        return ['Moderately obese', 'Medium risk']
    } else if (35.0 <= bmi && bmi < 39.9) {
        return ['Several obese', 'High risk']
    } else {
        return ['Very Several obese', 'Very high risk']
    }
}

const calculateBMI = () => {
    const modefiedUserData = []
    for (let item of userData) {
        const bmi = (item.WeightKg / (item.HeightCm * item.HeightCm) * 100 * 100).toFixed(1)
        const catgryAndHelth = bmiCategoryAndHealthRisk(bmi);
        const newItem = { ...item, bmi: Number(bmi), bmiCategory: catgryAndHelth[0], healthRisk: catgryAndHelth[1] }
        modefiedUserData.push(newItem)
    }
    return modefiedUserData
}

exports.addUserData = async (req, res) => {
    try {
        await userData.push(req.body);
        return res.status(200).json({message: "Successfully added person data !!!"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error, message: 'Internal server error.' });
    }
}

exports.getUserData = async (req, res) => {
    try {
        let count = 0;
        const userDetails = await calculateBMI()
        for (let item of userDetails) {
            if (item.bmiCategory === 'Overweight') count++;
        }
        return res.status(200).json({ 'Number of overweighted people': count, message: 'BMI category & health risk', userDetails: userDetails });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error, message: 'Internal server error.' });
    }
}