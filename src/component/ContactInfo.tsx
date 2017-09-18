import * as React from 'react';

export interface ContactInfoData {
    name: string;
    phone: string;
}

export interface ContactInfoProp {
  data: ContactInfoData;
  onClick?(key: React.MouseEvent<HTMLDivElement>): void;
}

export default class ContactInfo extends React.Component<ContactInfoProp> {
  constructor(props: ContactInfoProp) {
    super(props);
  }
    render() {
      return (
        <div onClick={this.props.onClick}>{this.props.data.name}</div>
      );
    }
}