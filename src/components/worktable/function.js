import React from 'react'
var layout = "base", settingsName = "remark." + layout + ".skinTools"

export default function setLocal(nameSet,valueSet) {
    console.log('llll',localStorage.getItem(settingsName))

    class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                sidebar: "dark",
                navbar: "this.props.nameColor",
                navbarInverse: "this.props.Inverse",
                primary: "primary"
            };
        }
        render() {
            // (nameSet === "navbar")
            // ? (this.setState({navbar: valueSet}))
            // : (nameSet === "navbarInverse")
            // ? (this.setState({navbarInverse: valueSet}))
            // :(null)
            // localStorage.setItem(settingsName,JSON.stringify(this.state));
            console.log('llll',localStorage.getItem(settingsName))
            // return (
            //     <div>
            //         {
            //             (this.props.state.reducer.isAuthenticated === "true" && this.props.location.pathname !=="/login")
            //             ? (<Component {...this.props.state} />)
            //             : (this.props.state.reducer.logout === "true")
            //             ? (<Redirect to='/login'/>
            //         )
            //             :(null)
            //         }
            //     </div>
            // )
        }
    }
}
