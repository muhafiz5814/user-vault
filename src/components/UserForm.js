// A common form component for creating new user and updating the existing users.
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {useAddNewUserMutation, useEditUserMutation } from "../store/APISlice";

const UserForm = ({user = {}, Editing = false}) => {

    // Get navigate function from useNavigate hook to go to a specific path.
    const navigate = useNavigate();

    // Get add New User mutation trigger function to create a new user.
    const [addNewUser, {isLoading: isAdding, isError: isAddingError, error: addingError, data: addedData, isSuccess: isAddingSuccess}] = useAddNewUserMutation();

    // Get edit User mutation trigger function to update an existing user.
    const [editUser, {isSuccess: isUpdatingSuccess, isLoading: isUpdating, isError: isUpdatingError, error: updatingError}] = useEditUserMutation();

    // Show respective success messages after creating or updating user.
    useEffect(() => {
        if(isAddingSuccess) {
            alert("User added successfully");
            navigate("/users");
        }
        if(isUpdatingSuccess) {
            alert("User updated successfully");
            navigate("/users");
        }
    }, [isAddingSuccess, isUpdatingSuccess]);

    // Initial state for input form elements while going to create a new user.
    const initialState = {
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
            lat: "",
            lng: "",
            },
        },
        company: {
            name: "",
            catchPhrase: "",
            bs: "",
        }
    }

    // If UserForm is working for editing the existing user, it will set form data to user details to pre fill the input elements of the form.
    // If UserForm is working for creating a new user, it will set form data to empty initial state to pre fill the input elements of the form that is keep them empty.
    const [formData, setFormData] = useState(Editing ? user : initialState);

    // As we have nested properties in state, Different conditions and checks are required to update the state along with input elements to make it controlled form component.
    /**
     * Handles input changes and updates state according to input value change.
     * Can be used for level and secondary level property changes.
     * @param {Event} e event that triggered the change
     * @param {String } parentField parent property of the changing input field property.
     */
    const handleInputChange = (e, parentField = "") => {
        const { name, value } = e.target;

        // If changing property is secondary level, then first we have to copy top level properties and then change a specific secondary level property using name and value.
        if (parentField) {
            setFormData((prev) => ({
            ...prev,
            [parentField]: {
                ...prev[parentField],
                [name]: value,
            },
            }));
        } else {
            setFormData((prev) => ({
            ...prev,
            [name]: value,
            }));
        }
    };

    /**
     * Handles input changes and updates state according to input value change.
     * Can be used for last level and secondary level property changes.
     * @param {Event} e event that triggered the function
     * @param {String} parentField top level property
     * @param {String} childField secondary level property
     */
    const handleNestedInputChange = (e, parentField, childField) => {
        const {name, value } = e.target;

        // If changing property is last level, then first we have to copy top level and secondary level properties and then change a specific last level property using name and value.
        setFormData((prev) => ({
            ...prev,
            [parentField]: {
            ...prev[parentField],
            [childField]: {
                ...prev[parentField][childField],
                [name]: value
            },
            },
        }));
    };

    /**
     * Handles submit operation.
     * Calls two different mutations triggering functions based on the scenario that is if it is creating a user or updating a user.
     * @param {Event} evt event that triggered the function
     * @param {Number} id id of the user which is being updated
     */
    const handleSubmit = async (evt, id = undefined) => {
        evt.preventDefault();

        if(Editing) {
            try{
                await editUser({id, updatedUser: formData}).unwrap();
                setFormData(initialState);
            } catch (error) {
                console.error(`Failed to update user. Error: ${error}`)
            }
        } else {
            try{
                await addNewUser(formData).unwrap();
                setFormData(initialState);
            } catch (error) {
                console.error(`Failed to add user. Error: ${error}`)
            }
        }
        
    };

    return (
        <div className="bg-black  mx-auto">
            <form onSubmit={!Editing ? handleSubmit : (evt) => handleSubmit(evt, user.id)} className="text-white bg-slate-300 ps-12">
                {/* Basic Details */}
                <div>
                    <label className="block text-black">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                <div>
                <label className="block text-black">Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                />
                </div>
                <div>
                <label className="block text-black">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                />
                </div>
                <div>
                <label className="block text-black">Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                />
                </div>
                <div>
                <label className="block text-black">Website</label>
                <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                />
                </div>

                {/* Address Section */}
                <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900">Address</h3>
                <div>
                    <label className="block text-black">Street</label>
                    <input
                    type="text"
                    name="street"
                    value={formData.address.street}
                    onChange={(e) => handleInputChange(e, 'address')}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                <div>
                    <label className="block text-black">Suite</label>
                    <input
                    type="text"
                    name="suite"
                    value={formData.address.suite}
                    onChange={(e) => handleInputChange(e, 'address')}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                <div>
                    <label className="block text-black">City</label>
                    <input
                    type="text"
                    name="city"
                    value={formData.address.city}
                    onChange={(e) => handleInputChange(e, 'address')}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                <div>
                    <label className="block text-black">Zipcode</label>
                    <input
                    type="text"
                    name="zipcode"
                    value={formData.address.zipcode}
                    onChange={(e) => handleInputChange(e, 'address')}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                <div>
                    <label className="block text-black">Latitude</label>
                    <input
                    type="text"
                    name="lat"
                    value={formData.address.geo.lat}
                    onChange={(e) => handleNestedInputChange(e, 'address', 'geo')}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                <div>
                    <label className="block text-black">Longitude</label>
                    <input
                    type="text"
                    name="lng"
                    value={formData.address.geo.lng}
                    onChange={(e) => handleNestedInputChange(e, 'address', 'geo')}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                </div>

                {/* Company Section */}
                <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900">Company</h3>
                <div>
                    <label className="block text-black">Company Name</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.company.name}
                    onChange={(e) => handleInputChange(e, 'company')}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                <div>
                    <label className="block text-black">CatchPhrase</label>
                    <input
                    type="text"
                    name="catchPhrase"
                    value={formData.company.catchPhrase}
                    onChange={(e) => handleInputChange(e, 'company')}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                <div>
                    <label className="block text-black">BS</label>
                    <input
                    type="text"
                    name="bs"
                    value={formData.company.bs}
                    onChange={(e) => handleInputChange(e, 'company')}
                    className='text-black w-3/4 min-w-80 max-w-lg min-h-10'
                    />
                </div>
                </div>

                <button type="submit" className="px-4 my-4 bg-green-800">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;