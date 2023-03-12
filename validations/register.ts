// import validator from "express-validator";

import * as validator from "express-validator";

export const registerValidations = [
    validator
        .body('email', 'Введите E-mail')
        .isEmail()
        .withMessage('Неверный формат E-mail')
        .isLength({min: 10, max: 40})
        .withMessage('Допустимое количество символов в почте от 10 до 40.'),
    validator
        .body('fullName', 'Введите имя')
        .isString()
        .isLength({min: 2, max: 40})
        .withMessage('Допустимое количество символов в имени от 2 до 40.'),
    validator
        .body('userName', 'Введите логин')
        .isString()
        .isLength({min: 2, max: 40})
        .withMessage('Допустимое количество символов в логине от 2 до 40.'),
    validator
        .body('password', 'Введите пароль')
        .isString()
        .isLength({min: 6})
        .withMessage('Пароль должен быть минимум 6 символов.')
        .custom((value, {req}) => {
            if(value !== req.body.password2) {
                throw new Error('Пароли не совпадают')
            } else {
                return value
            }
        }),

]
