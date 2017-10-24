import React from 'react';
import { ReferenceField } from 'admin-on-rest';

import FullNameField from './FullNameField';

const CustomerReferenceField = (props) => (
    <ReferenceField source="id" reference="customers" {...props}>
        <FullNameField />
    </ReferenceField>
);
CustomerReferenceField.defaultProps = {
    source: 'id',
    addLabel: true,
};

export default CustomerReferenceField;
