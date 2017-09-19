import * as React from 'react';
import * as ContactInfoClass from './ContactInfo';

interface ContactDetailsState {
    isEdit: boolean;
    name: string;
    phone: string;
}

interface ContactDetailProps {
    isSelected: boolean;
    contactInfo: ContactInfoClass.ContactInfoProp;
    onRemove(): void;
    onEdit(name: string, phone: string): void;
}

export default class ContactDetails extends React.Component<ContactDetailProps, ContactDetailsState> {
    constructor(props: ContactDetailProps) {
        super(props);
        this.state = {
            isEdit : false,
            name : '',
            phone : ''
        };
        this.handleEditeClick = this.handleEditeClick.bind(this);
        this.handleChanged = this.handleChanged.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEditeClick() {  
        if ( !this.props.isSelected ) {
            return;
        }
        if ( !this.state.isEdit ) {
            this.setState({
                name: this.props.contactInfo.data.name,
                phone: this.props.contactInfo.data.phone
            });
        } else {
            this.handleEdit();
        }
        this.setState({
            isEdit : !this.state.isEdit
        });
    }

    handleChanged(e: React.ChangeEvent<HTMLInputElement>) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleEdit() {
        console.log(name);
        this.props.onEdit(this.state.name, this.state.phone);
    }

    render() {
        const details: JSX.Element = (
            <div>
                <p>{this.props.contactInfo.data.name}</p>
                <p>{this.props.contactInfo.data.phone}</p>
            </div>
        );
        const blank: JSX.Element = (<div>Not Selected</div>);

        const edit: JSX.Element = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"               
                        onChange={this.handleChanged}
                        value={this.state.name}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        onChange={this.handleChanged}
                        value={this.state.phone}
                    />
                </p>
            </div>            
        );

        const view: JSX.Element = this.state.isEdit ? edit : details;

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={this.handleEditeClick}>
                        {this.state.isEdit ? 'Ok' : 'Edit'}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        );
    }
}