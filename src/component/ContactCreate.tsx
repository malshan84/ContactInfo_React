import * as React from 'react';
import * as ContactInfoClass from './ContactInfo';

interface ContactCreateProps {
    onCreate(contactData: ContactInfoClass.ContactInfoData): void;
}

export default class ContactCreate extends React.Component<ContactCreateProps, {name: string, phone: string}> {
    constructor(props: ContactCreateProps) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        };
        this.handleChanged = this.handleChanged.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
    }

    handleChanged(e: React.ChangeEvent<HTMLInputElement>) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleOnclick() {
        const contact: ContactInfoClass.ContactInfoData = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);

    }

    render() {
        return (
            <div>
                <h2>Create Contact</h2>

                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={this.handleChanged}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        onChange={this.handleChanged}
                    />
                </p>
                <button onClick={this.handleOnclick}>Create</button>
            </div>
        );
    }
}