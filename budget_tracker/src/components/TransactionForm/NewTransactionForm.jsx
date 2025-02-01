import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap'


const NewTransactionForm = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const availableUsers = [
    {id:1,name:"Shiva"},
    {id:2,name:"Raju"},
    {id:3,name:"Ravi"},
    {id:4,name:"Shankar"}
  ];
  const availableCategories = [
    {id:1,name:"Travel"},
    {id:2,name:"Fashion"},
    {id:3,name:"Food"},
    {id:4,name:"technologies"}
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to the Django backend to save the transaction
  };

  return (
    <Form onSubmit={handleSubmit} className="bg-info">
      <Form.Group>
        <Form.Label htmlFor="amount">Amount:</Form.Label>
        <Form.Control
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="date">Date:</Form.Label>
        <Form.Control
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="description">Description:</Form.Label>
        <Form.Control
          as={"textarea"}
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="users">Users:</Form.Label>
        <Form.Select
          multiple
          id="users"
          value={selectedUsers}
          onChange={(e) => setSelectedUsers(Array.from(e.target.selectedOptions).map((option) => option.value))}
        >
          {/* Map over a list of available users to create options */}
          {availableUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label htmlFor="category">Category:</Form.Label>
        <Form.Select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          { /* Map over a list of available categories to create options*/}
          {availableCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default NewTransactionForm;
