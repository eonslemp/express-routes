const React = require('react')
const DefaultLayout = require('../layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { fruits } = this.props

        return (
            <DefaultLayout title="All Fruit" foodGroup="fruits">
                    <h1>Fruits Index Page</h1>
                    <ul id="fruits-index">
                        {fruits.map((fruit, i) => {
                            return (
                                <li key={i}>
                                    The <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/fruits/new">Create a new a fruit</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;