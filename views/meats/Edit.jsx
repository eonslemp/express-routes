const React = require('react')
// const { vegetables } = require('../models/seed').vegetables
const DefaultLayout = require('../layouts/DefaultLayout')

class meatEdit extends React.Component {
    render() {
        const { name, type, _id } = this.props.meat
        // let { vegetable } = this.props
        return (    
            <DefaultLayout title="Meat Editor" foodGroup="meats">
                <h1>Veg Edit Page</h1>
                <form action={`/meats/${_id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={name}/>

                    <label htmlFor="color">Type:</label>
                    <input type="text" id="type" name="type" defaultValue={type} />

                    <input type="submit" value="edit meat" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = meatEdit