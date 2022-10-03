const React = require('react')
// const DefaultLayout = require('../layouts/DefaultLayout')

const DefaultLayout = require('../layouts/DefaultLayout')


class meatIndex extends React.Component {

    render() {

        const { meats } = this.props
        // console.log(fruits)
        return (
            // <DefaultLayout title="all fruit" foodGroup="fruits"></DefaultLayout>
            <DefaultLayout title="The Meat" foodGroup="meat">
                    <h1>Meat Index: getsome</h1>
                    <ul id="meat-index">
                    
                        {meats.map((meat) => {
                            return (
                                <li key={meat._id}>
                                    The <a href={`/meats/${meat._id}`}>{meat.name}</a> is {meat.type}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/meats/new">Create a new a meat</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = meatIndex;