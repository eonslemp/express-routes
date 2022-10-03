const React = require('react')
// const DefaultLayout = require('../layouts/DefaultLayout')

const DefaultLayout = require('../layouts/DefaultLayout')


class vegIndex extends React.Component {

    render() {

        const { vegetables } = this.props
        // 
        return (
            <DefaultLayout title="Vegetables" foodGroup="vegetables">
                    <h1>Veggies Index Page</h1>
                    <ul id="veggie-index">
                    
                        {vegetables.map((vegetable) => {
                            return (
                                <li key={vegetable._id}>
                                    The <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is {vegetable.color}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/vegetables/new">Create a new a vegetable</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = vegIndex;