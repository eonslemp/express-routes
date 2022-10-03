const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')

class meatShow extends React.Component {

    render() {

        const { name, type, _id } = this.props.meat

        return (
            <DefaultLayout title={`${name} details`} foodGroup='meats'>
                <h1>Meat Show Page</h1>
                <p>
                    The {name} is {type}
                </p>
                <button>
                <a href={`/meats/${_id}/edit`}>Edit</a>
                </button>
                <form action={`/meats/${_id}?_method=DELETE`} method='POST'>
                    <input type="submit" value="DELETE" />
                </form>

                <nav>
                    <a href="/meats">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = meatShow