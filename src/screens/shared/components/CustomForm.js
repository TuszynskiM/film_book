import React from 'react';
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-material-ui';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import ErrorMassage from "./ErrorMassage";

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    '& .MuiOutlinedInput-root': {
      color: '#E60B0B',
      height: '60px',
      width: '400px',
      '& fieldset': {
        border: '2px solid #E60B0B',
        borderRadius: '30px',
        color: '#E60B0B'
      },
      '&:hover fieldset': {
        borderColor: '#E60B0B',
        color: '#E60B0B'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E60B0B',
        color: '#E60B0B'
      },
    },
    '& label': {
      color: '#E60B0B',
    },
    '& label.Mui-focused': {
      color: '#E60B0B',
    },
    marginTop: 20,
  },
}));

const CustomForm = ({children, initialValue, validationSchema, inputConfig, handleSubmit, message =''}) => {
  const classes = useStyles();

  return (
      <Formik
          onSubmit={handleSubmit}
          initialValues={initialValue}
          validationSchema={validationSchema}
      >
        <Form className={classes.form}>
            {inputConfig.map(input =>
                <Field
                    component={TextField}
                    name={input.name}
                    type={input.type}
                    label={input.label}
                    variant="outlined"
                    className={classes.input}
                    autoComplete='off'
                />)}
          {children}
        </Form>
      </Formik>
  )
}

CustomForm.propTypes = {
  children: PropTypes.node,
  initialValue: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  inputConfig: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default CustomForm;