import Employee from '../models/Employees.js'

const getAllEmployees = async (req, res) => {
    try {
        const employee = await  Employee.find({})
        res.status(200).json({employees, count: employees.length})
        // res.status(200).json({employees, count: employees.length})
    } catch(err) {
        res.status((500).json ({msg:err}))
    }
    // res.send('Get all employees')
}
const getEmployee = async (req, res) => {
    try {
        let {id:employeeId} = req.params
        const employee = await Employee.findOne({_id: employeeId})
        if (!employee) {
            return res.status(404).json({msg: `No employee with ID ${employeeId} found.`})
        }
        res.status(200).json({employee})
    }catch (err) {
        res.status(500).json({msg:err})
    }
    // res.send('Get a single employee')
}

const createEmployee = async (req, res) => {
    try {
    const employee = await Employee.create(req.body)
    res.status(201).json({msg: 'Employee added successfully'})
    //res.send('Create a new employee')
    } catch (err) {
        res.status(500).json({msg:err})
    }
}


const updateEmployee = async(req, res) => {
    try {
        let {id: employeeId} = req.params
        const employee = await Employee.findOneAndUpdate({_id: employeeId}, req.body, 
            {
                new:true, 
                runValidators: true
        })
        if (!employee) {
            return res.status(404).json({msg:`No employee with ID ${employeeId} found.`})
        }
        res.status(200).json({msg: 'Successfully updated employees'})
    }catch(err) {
        res.status(500).json({msg:err})
    }
    res.send('Update an employee')
}


const deleteEmployee = async (req, res) => {
    try {
        let {id:employeeId} = req.params
        const employee = await Employee.findOneAndDelete({_id: employeeId})
        if (!employee) {
            return res.status(404).json({msg: `No employee with ID ${employeeId} found.`})
        }
        res.status(200).json({msg: 'Employee successfully deleted'})
        // res.send('Delete an employee')
    }catch (err) {
        res.status(500).json({msg:err})
    }
    
}

export {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}
