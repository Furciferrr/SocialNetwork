import React from 'react'
import { Field, Form, Formik } from 'formik';
import { FilterType } from '../../redax/users-reducer';
import { useSelector } from 'react-redux';
import { getUsersFilter } from '../../redax/selectors';




const userSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type FrienFormType = 'true' | 'false' | 'null'

type FormType = {
    term: string
    friend: FrienFormType
}

type UserSearchFormPropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const UsersSearchForm: React.FC<UserSearchFormPropsType> = (props) => {
    const filter = useSelector(getUsersFilter)
    const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
        values.term = ''
    };
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ term: filter.term, friend: String(filter.friend) as FrienFormType}}
                validate={userSearchFormValidate}
                onSubmit={submit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field as="select" name="friend">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
           </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UsersSearchForm