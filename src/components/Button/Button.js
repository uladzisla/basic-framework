import {Component} from '../../core'
import './button.scss';

export class Button extends Component{
    constructor(){
        super();
        this.state = {
            isActive: false,
            label: 'Click',
            count:1
        }

    }

    registerEvents(){
        this.addEventListener('click', (evt)=>{
            if(evt.target.closest('.plus')){
               this.setState((state) => {
                return {
                    ...state,
                    count: this.state.count= this.state.count + 1
                }
               })
            }
            if(evt.target.closest('.minus') && this.state.count>0){
                this.setState((state) => {
                 return {
                     ...state,
                     count: this.state.count= this.state.count - 1
                 }
                })
             }
        })
    }

    render() {
        return `
        <button class='plus'> + </button>
        <span> ${this.state.count}</span>
        <button class='minus'> - </button> 
        `
    }
}

customElements.define('my-button', Button)