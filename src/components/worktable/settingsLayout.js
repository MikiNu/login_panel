import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateSettings} from '/var/www/reactor/src/reducers/actions';
// import {setLocal} from './function.js'
// var st=0
var layout = "base", settingsName = "remark." + layout + ".skinTools"
var skintoolsNavbar = [
    {id: 1, nameColor:'primary'},
    {id: 2, nameColor:'brown'},
    {id: 3, nameColor:'cyan'},
    {id: 4, nameColor:'green'},
    {id: 5, nameColor:'grey'},
    {id: 6, nameColor:'indigo'},
    {id: 7, nameColor:'orange'},
    {id: 8, nameColor:'pink'},
    {id: 9, nameColor:'purple'},
    {id: 10, nameColor:'red'},
    {id: 11, nameColor:'teal'},
    {id: 12, nameColor:'yellow'}
]
let inputInv
let inputStyleH
let inputStyleMD
let inputStyleML
let inputStyleSH
class SettingHHeader extends React.Component{

    constructor(props) {
          super(props)
          this.state = {
            skintoolsNavbar: skintoolsNavbar,
            navbarInverse: ""
          }
      }
      componentWillMount(){
          let viewH = JSON.parse(localStorage.getItem(settingsName))
          if (viewH.navbarInverse === "true"){
          inputInv="checked",
          this.setState({
              navbarInverse:false
          })
          }
          if (viewH.navbarInverse === "false"){
          this.setState({
              navbarInverse:true
          })}
      }
      viewHeaders(){
          if (this.state.navbarInverse == 'true' || this.state.navbarInverse == true){
              this.setState({
                    navbarInverse:false
                })
          }
          if (this.state.navbarInverse == 'false' || this.state.navbarInverse == false){
              this.setState({
                    navbarInverse:true
                })
          }
        //   this.setState(prevState => ({
        //       navbarInverse: !prevState.navbarInverse
        //   }))
           var viewH = JSON.parse(localStorage.getItem(settingsName))
          viewH.navbarInverse = JSON.stringify(this.state.navbarInverse)
          localStorage.setItem(settingsName,JSON.stringify(viewH));
          this.props.updateSettings(viewH.navbarInverse)
        //   console.log('styleHeaders',viewH.navbarInverse)
      }

render(){
    return(
        <div role="tabpanel" id="skintoolsNavbar" className="tab-pane active">
            <h4 className="site-skintools-title">Вид шапки</h4>
            <div className="checkbox-custom checkbox-inverse">
                <input id="skintoolsNavbar-inverse" type="checkbox" onClick = {this.viewHeaders.bind(this)} name="skintoolsNavbar" value="inverse" defaultChecked={inputInv}/>
                <label htmlFor="skintoolsNavbar-inverse">inverse</label>
            </div>
            <h4 className="site-skintools-title">Стиль шапки</h4>
                {this.state.skintoolsNavbar.map(function(el) {
                     return (
                         <StyleHeader
                            key={el.id}
                            nameColor={el.nameColor}/>
                     )
                })}


        </div>

    )}}
    export const SettingHeader = connect(
        state => ({state:state
        }),
        dispatch => bindActionCreators({
            updateSettings
        }, dispatch)
    )(SettingHHeader);
    function setLocal(){
        // var nameColor = this.props.nameColor;
        // console.log('nameColor',nameColor)
        const defaultSettings= {
            sidebar: "dark",
            navbar: this.props.nameColor,
            navbarInverse: "false",
            primary: "primary"
        }
        localStorage.setItem(settingsName,JSON.stringify(defaultSettings));
        console.log('func',localStorage.getItem(settingsName))
    }
    class StyleHHeader extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                nameColor: this.props.nameColor
            };
        }
    styleHeaders(){
        var styleH = JSON.parse(localStorage.getItem(settingsName))
        styleH.navbar = this.props.nameColor
        localStorage.setItem(settingsName,JSON.stringify(styleH));
        this.props.updateSettings(styleH.navbar)
        // console.log('styleHeaders',styleH.navbar)
    }
    render(){
         let styleH = JSON.parse(localStorage.getItem(settingsName))
        //  let viewH = JSON.parse(localStorage.getItem(settingsName))
        //  if (viewH.navbar === this.props.nameColor){
        //  inputStyleSH="checked"
        //  }
        // console.log('func',this.state.count)
        // console.log(localStorage.getItem(settingsName))
        let nameComp = "skintoolsNavbar-"+(this.props.nameColor)
        let nameClass = "radio-custom radio-"+(this.props.nameColor)
        if (styleH.navbar===this.props.nameColor){
            inputStyleSH="checked"
        return(
            <div className={nameClass}>
                <input id={nameComp} type="radio" onClick = {this.styleHeaders.bind(this)} name="skintoolsNavbar" value="{this.props.nameColor}" defaultChecked={inputStyleSH}/>
                <label htmlFor={nameComp}>{this.props.nameColor}</label>
            </div>
        )}
        return(
            <div className={nameClass}>
                <input id={nameComp} type="radio" onClick = {this.styleHeaders.bind(this)} name="skintoolsNavbar" value="{this.props.nameColor}"/>
                <label htmlFor={nameComp}>{this.props.nameColor}</label>
            </div>
        )

    }}
    export const StyleHeader = connect(
        state => ({state:state
        }),
        dispatch => bindActionCreators({
            updateSettings
        }, dispatch)
    )(StyleHHeader);
    export class SettingMMenu extends React.Component{
        componentWillMount(){
            var styleM = JSON.parse(localStorage.getItem(settingsName))
            if (styleM.sidebar === "dark"){
                inputStyleMD="checked"
            }
            if (styleM.sidebar === "light"){
            inputStyleML="checked"
            }
        }
        constructor(props) {
            super(props)
            this.state = {
                styleMenu: false
            }
        }
        styleMenuD(){
             var styleMD = JSON.parse(localStorage.getItem(settingsName))
              styleMD.sidebar =  'dark'
            localStorage.setItem(settingsName,JSON.stringify(styleMD))
            this.props.updateSettings(styleMD.sidebar)
        }
        styleMenuL(){
             var styleML = JSON.parse(localStorage.getItem(settingsName))
              styleML.sidebar =  'light'
            localStorage.setItem(settingsName,JSON.stringify(styleML))
            this.props.updateSettings(styleML.sidebar)
        }
        // styleMenu(){
        //     this.setState(prevState => ({
        //         styleMenu: !prevState.styleMenu
        //     }))
        //     console.log('styleHeaders',this.state.styleMenu)
        //      var styleM = JSON.parse(localStorage.getItem(settingsName))
        //      var colorSM;
        //       if (this.state.styleMenu === false){
        //           colorSM = "dark"
        //       }
        //       if (this.state.styleMenu === true){
        //           colorSM = 'light'
        //       }
        //       styleM.sidebar =  colorSM
        //     localStorage.setItem(settingsName,JSON.stringify(styleM))
        // }
        render() {
            return (
                <div role="tabpanel" id="skintoolsSidebar" className="tab-pane active">
                    <h4 className="site-skintools-title">Стили меню</h4>
                    <div className="radio-custom radio-dark">
                        <input id="skintoolsSidebar-dark" type="radio" onClick = {this.styleMenuD.bind(this)}  name="skintoolsSidebar" defaultChecked={inputStyleMD} value="dark"/>
                        <label htmlFor="skintoolsSidebar-dark">dark</label>
                    </div>
                    <div className="radio-custom radio-light">
                    <input id="skintoolsSidebar-light" type="radio" onClick = {this.styleMenuL.bind(this)}  name="skintoolsSidebar" defaultChecked={inputStyleML} value="light"/>
                    <label htmlFor="skintoolsSidebar-light">light</label>
                    </div>
                </div>
            )
        }
    }
    export const SettingMenu = connect(
        state => ({state:state
        }),
        dispatch => bindActionCreators({
            updateSettings
        }, dispatch)
    )(SettingMMenu);
    // const SettingMenu = () => (
    //     <div role="tabpanel" id="skintoolsSidebar" className="tab-pane active">
    //         <h4 className="site-skintools-title">Стили меню</h4>
    //         <div className="radio-custom radio-dark">
    //             <input id="skintoolsSidebar-dark" type="radio" name="skintoolsSidebar" value="dark"/>
    //             <label htmlFor="skintoolsSidebar-dark">dark</label>
    //         </div>
    //         <div className="radio-custom radio-light">
    //         <input id="skintoolsSidebar-light" type="radio" name="skintoolsSidebar" value="light"/>
    //         <label htmlFor="skintoolsSidebar-light">light</label>
    //         </div>
    //     </div>
    // )

    export class SettingLayout extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                itemMenu: false,
                itemHead: true
            }
        }
        settingsHeader () {
            this.setState({
                itemMenu: false,
                itemHead: true}
            )
        }
        settingsMenu(){
            this.setState({
                itemMenu: true,
                itemHead: false}
            )
        }



        render() {
            console.log(this.state.itemMenu)
            return (
                <div className="site-skintools is-open">
                    <div className="site-skintools-inner">
                        <div className="site-skintools-content">
                            <div className="nav-tabs-horizontal">
                                <ul role="tablist" data-plugin="nav-tabs" className="nav nav-tabs nav-tabs-line">
                                    <li role="presentation" className="">
                                        <a role="tab" aria-controls="skintoolsSidebar"  href="#" onClick = {this.settingsMenu.bind(this)} data-toggle="tab" aria-expanded={this.state.itemMenu}>Меню</a>
                                    </li>
                                    <li role="presentation" className="active">
                                        <a role="tab" aria-controls="skintoolsNavbar"  href="#" onClick = {this.settingsHeader.bind(this)} data-toggle="tab" aria-expanded={this.state.itemHead}>Шапка</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    {this.state.itemMenu ? <SettingMenu/> : <SettingHeader/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}


    }
