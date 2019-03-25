import * as React from 'react'
import {
    Form,
    Input,
    Button
} from 'antd'
import { Link } from 'dva/router'
import styles from './login.less'

const FormItem = Form.Item

export class Login extends React.Component<any, any> {

    render() {
        const {
            getFieldDecorator
        } = this.props.form

        return (
            <main className={styles.container}>
                <div className={styles.form__wrapper}>
                    <Form className={styles.form}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {})(
                                    <Input 
                                        placeholder="user name"
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password', {})(
                                    <Input 
                                        placeholder="password"
                                    />
                                )
                            }
                        </FormItem>
                        <Button className={styles.submitBtn}>LOGIN</Button>
                        <p>
                            Not registered?
                            <Link 
                                className={styles.signUpLink} 
                                to="./user/register"
                                >Create an account</Link>
                        </p>
                    </Form>
                </div>
            </main>
        )
    }
}

export default Form.create()(Login)