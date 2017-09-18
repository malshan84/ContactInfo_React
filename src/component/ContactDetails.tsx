import * as React from 'react';
import * as ContactInfoClass from './ContactInfo';
export default class ContactDetails extends React.Component<{ isSelected: boolean, contactInfo: ContactInfoClass.ContactInfoProp}> {
    constructor(props: { isSelected: boolean, contactInfo: ContactInfoClass.ContactInfoProp}) {
        
        super(props);
    }
    render() {                
        const details: JSX.Element = (
            <div>
                <p>{this.props.contactInfo.data.name}</p>
                <p>{this.props.contactInfo.data.phone}</p>
            </div>
        );
        const blank: JSX.Element = (<div>Not Selected</div>);
        return (
            <div>
                {this.props.isSelected ? details : blank}             
            </div>
        );
    }
}