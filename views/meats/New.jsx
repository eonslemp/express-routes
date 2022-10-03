const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class newMeat extends React.Component {
    render(){
        return (
            // <DefaultLayout title="create a new fruit" foodGroup='fruits'
            <DefaultLayout title="create a new meat" foodGroup="meats">
                <h1>New Meat Page</h1>
                <form action="/meats" method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" />

                    <input type="submit" value="Create Meat"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = newMeat