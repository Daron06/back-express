import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Неверный пароль').isLength({ min: 5 }),
  body('fullName', 'Неверное имя').isLength({ min: 3 }),
  body('avatarUrl', 'Неверный путь').optional().isURL(),
];

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Неверный пароль').isLength({ min: 5 }),
];
