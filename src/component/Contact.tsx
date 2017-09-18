import * as React from 'react';
import * as ContactInfoClass from './ContactInfo';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';

interface ContactState {
    selectedKey: number;
    keyword: string;
    contactData: Array<ContactInfoClass.ContactInfoProp>;
}

class Contact extends React.Component<{}, ContactState> {
    constructor() {
        super();
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [{
                data: {
                    name: 'Abet',
                    phone: '010-0000-0001'
                }          
            }, {
                data: {
                    name: 'Betty',
                    phone: '010-0000-0002'
                }                
            }, {
                data: {
                    name: 'Charlie',
                    phone: '010-0000-0003'
                }
               
            }, {
                data: {
                    name: 'David',
                    phone: '010-0000-0004'
                }               
            }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);

        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key: number) {
        this.setState({
            selectedKey: key
        });
        console.log(key); 
    }

    render() {
        const mapToComponents = (data: Array<ContactInfoClass.ContactInfoProp>) => {
            data.sort();
            data = data.filter((contactData) => {
                return contactData.data.name.toLowerCase().indexOf(this.state.keyword) > -1;
            });
            
            return data.map((contactData, i) => {
                return (
                <ContactInfo 
                    data={contactData.data}
                    key={i}
                    onClick={() => this.handleClick(i)}
                />)
                ;
            });
        };
        const getContactData = (selectedKey: number): ContactInfoClass.ContactInfoProp => {
            if (selectedKey === -1) {
                return(
                    {
                        data: {
                            name: '',
                            phone: ''
                        }
                    }
                );
            }else {
                return this.state.contactData[selectedKey];
            }
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input 
                    name="Keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                <ContactDetails 
                    isSelected={this.state.selectedKey !== -1}
                    contactInfo={getContactData(this.state.selectedKey)}           
                />
            </div>
            );
        }
}

export default Contact;