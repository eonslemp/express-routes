const React = require('react')
// const { vegetables } = require('../models/seed').vegetables
const DefaultLayout = require('../layouts/DefaultLayout')

class vegEdit extends React.Component {
    render() {
        const { name, color, _id } = this.props.vegetable
        // let { vegetable } = this.props
        return (    
            <DefaultLayout title="edit a vegetable" foodGroup="vegetables">
                <h1>Veg Edit Page</h1>
                <form action={`/vegetables/${_id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={name}/>

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" defaultValue={color} />

                    <input type="submit" value="edit vegetable" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = vegEdit