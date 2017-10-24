import React from 'react';
import { ReferenceField } from 'admin-on-rest';

import FullNameField from './FullNameField';

const EmployeeReferenceField = (props) => (
    <ReferenceField source="id" reference="employees" {...props}>
        <FullNameField />
    </ReferenceField>
);
EmployeeReferenceField.defaultProps = {
    source: 'id',
    addLabel: true,
};

export default EmployeeReferenceField;
