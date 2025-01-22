import React, { useState } from 'react';
import { useAddNewUserMutation } from '../store/APISlice';

const NewUser = () => {

    const [addNewUser, {isLoading: isAdding, isError: isAddingError, error: addingError, data: addedData}] = useAddNewUserMutation();

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

    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e, parentField = "") => {
        const { name, value } = e.target;

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

    const handleNestedInputChange = (e, parentField, childField) => {
        const {name, value } = e.target;

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await addNewUser(formData).unwrap();
            setFormData(initialState);
        } catch (error) {
            console.error(`Failed to add service. Error: ${error}`)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="text-white">
            {/* Basic Details */}
            <div>
            <label className="block text-gray-200">Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className='text-black'
            />
            </div>
            <div>
            <label className="block text-gray-200">Username</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className='text-black'
            />
            </div>
            <div>
            <label className="block text-gray-200">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className='text-black'
            />
            </div>
            <div>
            <label className="block text-gray-200">Phone</label>
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className='text-black'
            />
            </div>
            <div>
            <label className="block text-gray-200">Website</label>
            <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className='text-black'
            />
            </div>

            {/* Address Section */}
            <div className="mt-4">
            <h3 className="text-lg font-bold">Address</h3>
            <div>
                <label className="block text-gray-200">Street</label>
                <input
                type="text"
                name="street"
                value={formData.address.street}
                onChange={(e) => handleInputChange(e, 'address')}
                className='text-black'
                />
            </div>
            <div>
                <label className="block text-gray-200">Suite</label>
                <input
                type="text"
                name="suite"
                value={formData.address.suite}
                onChange={(e) => handleInputChange(e, 'address')}
                className='text-black'
                />
            </div>
            <div>
                <label className="block text-gray-200">City</label>
                <input
                type="text"
                name="city"
                value={formData.address.city}
                onChange={(e) => handleInputChange(e, 'address')}
                className='text-black'
                />
            </div>
            <div>
                <label className="block text-gray-200">Zipcode</label>
                <input
                type="text"
                name="zipcode"
                value={formData.address.zipcode}
                onChange={(e) => handleInputChange(e, 'address')}
                className='text-black'
                />
            </div>
            <div>
                <label className="block text-gray-200">Latitude</label>
                <input
                type="text"
                name="lat"
                value={formData.address.geo.lat}
                onChange={(e) => handleNestedInputChange(e, 'address', 'geo')}
                className='text-black'
                />
            </div>
            <div>
                <label className="block text-gray-200">Longitude</label>
                <input
                type="text"
                name="lng"
                value={formData.address.geo.lng}
                onChange={(e) => handleNestedInputChange(e, 'address', 'geo')}
                className='text-black'
                />
            </div>
            </div>

            {/* Company Section */}
            <div className="mt-4">
            <h3 className="text-lg font-bold">Company</h3>
            <div>
                <label className="block text-gray-200">Company Name</label>
                <input
                type="text"
                name="name"
                value={formData.company.name}
                onChange={(e) => handleInputChange(e, 'company')}
                className='text-black'
                />
            </div>
            <div>
                <label className="block text-gray-200">CatchPhrase</label>
                <input
                type="text"
                name="catchPhrase"
                value={formData.company.catchPhrase}
                onChange={(e) => handleInputChange(e, 'company')}
                className='text-black'
                />
            </div>
            <div>
                <label className="block text-gray-200">BS</label>
                <input
                type="text"
                name="bs"
                value={formData.company.bs}
                onChange={(e) => handleInputChange(e, 'company')}
                className='text-black'
                />
            </div>
            </div>

            <button type="submit" className="p-4 bg-green-800">
                Submit
            </button>
        </form>
    );
};

export default NewUser;