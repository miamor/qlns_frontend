import React from 'react';
import {
    Create,
    Delete,
    Edit,
    translate,
    Datagrid,
    DateField,
    DateInput,
    TextField,
    Filter,
    FormTab,
    List,
    LongTextInput,
    TabbedForm,
    EmailField,
    NumberField,
    TextInput,
    SelectInput,
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';

import EditButton from '../buttons/EditButton';
import FullNameField from './FullNameField';

export const CustomerIcon = Icon;

const CustomerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
    </Filter>
);

const colored = WrappedComponent => props => props.record[props.source] > 500 ?
    <span style={{ color: 'red' }}><WrappedComponent {...props} /></span> :
    <WrappedComponent {...props} />;

const ColoredNumberField = colored(NumberField);
ColoredNumberField.defaultProps = NumberField.defaultProps;

export const CustomerList = (props) => (
    <List {...props} filters={<CustomerFilter />} sort={{ field: 'last_seen', order: 'DESC' }} perPage={25}>
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <FullNameField />
            <DateField source="birthday" type="date" />
            <EmailField source="email" />
            <TextField source="type" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CustomerCreate = (props) => (
    <Create title="Add new user" {...props}>
        <TabbedForm>
            <FormTab label="resources.Customers.tabs.identity">
                <TextInput source="first_name" style={{ display: 'inline-block' }} />
                <TextInput source="last_name" style={{ display: 'inline-block', marginLeft: 32 }} />
                <TextInput type="email" source="email" validation={{ email: true }} options={{ fullWidth: true }} style={{ width: 544 }} />
                <DateInput source="birthday" style={{ display: 'inline-block' }} />
                <SelectInput source="type" choices={[
                    { id: 'admin', name: 'Admin' },
                    { id: 'mod', name: 'Mod' },
                    { id: 'member', name: 'Member' },
                ]} />
            </FormTab>
            <FormTab label="resources.Customers.tabs.address">
                <LongTextInput source="address" style={{ maxWidth: 544 }} />
                <TextInput source="zipcode" style={{ display: 'inline-block' }} />
                <TextInput source="city" style={{ display: 'inline-block', marginLeft: 32 }} />
            </FormTab>
        </TabbedForm>
    </Create>
);

const CustomerTitle = ({ record }) => record ? <FullNameField record={record} size={32} /> : null;

export const CustomerEdit = (props) => (
    <Edit title={<CustomerTitle />} {...props}>
        <TabbedForm>
            <FormTab label="resources.Customers.tabs.identity">
                <TextInput source="first_name" style={{ display: 'inline-block' }} />
                <TextInput source="last_name" style={{ display: 'inline-block', marginLeft: 32 }} />
                <TextInput type="email" source="email" validation={{ email: true }} options={{ fullWidth: true }} style={{ width: 544 }} />
                <DateInput source="birthday" style={{ display: 'inline-block' }} />
                <SelectInput source="type" choices={[
                    { id: 'admin', name: 'Admin' },
                    { id: 'mod', name: 'Mod' },
                    { id: 'member', name: 'Member' },
                ]} />
            </FormTab>
            <FormTab label="resources.Customers.tabs.address">
                <LongTextInput source="address" style={{ maxWidth: 544 }} />
                <TextInput source="zipcode" style={{ display: 'inline-block' }} />
                <TextInput source="city" style={{ display: 'inline-block', marginLeft: 32 }} />
            </FormTab>
        </TabbedForm>
    </Edit>
);

const CustomerDeleteTitle = translate(({ record, translate }) => <span>
    {translate('resources.Customers.page.delete')}&nbsp;
    {record && <img src={`${record.avatar}?size=25x25`} width="25" alt="" />}
    {record && `${record.first_name} ${record.last_name}`}
</span>);

export const CustomerDelete = (props) => <Delete {...props} title={<CustomerDeleteTitle />} />;
