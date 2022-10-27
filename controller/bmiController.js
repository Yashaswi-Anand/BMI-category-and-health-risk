const data =[
    {"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, 
    {"Gender": "Male", "HeightCm": 161,"WeightKg":85 }, 
    { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, 
    { "Gender": "Female","HeightCm": 166,"WeightKg": 62},
    {"Gender": "Female", "HeightCm": 150, "WeightKg": 70},
    {"Gender": "Female","HeightCm": 167, "WeightKg": 82},
]

exports.addData = async(req,res) =>{
    try {
        await data.push(req.body);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}

exports.getData = async(req,res)=>{
    try {
        return res.status(200).json({ data: data, message: 'All data'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error, message: 'Internal server error.'});
    }
}