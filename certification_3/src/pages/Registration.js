import React from "react";
import { Link } from 'react-router-dom';
import './registration.css';
import { useForm } from 'react-hook-form';


const Registration = () => {

	const {
		register,
		formState: {
			errors,
			isValid
		},
		handleSubmit,
		reset,
	} = useForm();


	const onSubmit = (data) => {
		console.log(JSON.stringify(data));
		reset();
	}

	return (
		<div className="reg__wrapper">
			<header className='header reg__header'>
				<div className='header__container'>
					<div className='header__logo'>Интернет-магазин</div>
					<div className='header__nav-wrapper'>
						<ul className='header__nav'>
							<li className='header__nav-link'><Link to="/">Главная</Link></li>
							<li className='header__nav-link'><Link to="/contacts">Контакты</Link></li>
							<li className='header__nav-link'><Link to="/lk">Войти</Link></li>
						</ul>
					</div>
				</div>
				<div className='header__advert'>
				</div>
			</header>

			<div className='registration'>
				<div className='registration__wrapper'>
					<h2 className='registration__title'>Регистрация</h2>
					<form action='#' onSubmit={handleSubmit(onSubmit)} className='registration__form'>
						<div className='registration__form-input-wrapper'>
							<label htmlFor='email' className='registration__form-label'>* Email</label>
							<input {...register('email', {
								required: "Поле обязательно для заполнения",
								pattern: {
									value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: 'Email введён некорректно'
								}
							})}
								id='email' type='text' name='email' placeholder='Введите Email'
								className='registration__form-input' />
							<div className='registration__form-input_error'>
								{errors?.email && <span>{errors?.email?.message || "Ошибка!"}</span>}
							</div>
						</div>
						<div className='registration__form-input-wrapper'>
							<span id='pass-empty' className='registration__form-span'>Поле обязательно для заполнения</span>
							<span id='pass-error' className='registration__form-span'>Пароль должен содержать не менее 8
								символов</span>
							<label htmlFor='password' className='registration__form-label'>* Пароль</label>
							<input {...register('password', {
								required: "Поле обязательно для заполнения",
								minLength: {
									value: 8,
									message: "Пароль должен содержать не менее 8	символов"
								}
							})}
								id='password' type='password' name='password' placeholder='Введите пароль'
								className='registration__form-input' />
							<div className='registration__form-input_error'>
								{errors?.password && <span>{errors?.password?.message || "Ошибка!"}</span>}
							</div>
						</div>
						<div className='registration__form-input-wrapper'>
							<span id='pass2-error' className='registration__form-span'>Пароли не совпадают</span>
							<label htmlFor='repassword' className='registration__form-label'>* Подтверждение пароля</label>
							<input id='repassword' type='password' name='password' placeholder='Подтвердите пароль'
								className='registration__form-input' />
						</div>
						<div className='registration__form-radio-wrapper'>
							<span className='registration__form-radio-span'>Пол</span>
							<div className='registration__form-gender-wrapper'>
								<input type='radio' name='gender' id='male' value='man' className='registration__form-radio' defaultChecked />
								<div className='registration__form-radio-element'></div>
								<label htmlFor='radio-1' className='registration__form-radio-label'>Мужчина</label>
							</div>
							<div className='registration__form-gender-wrapper'>
								<input type='radio' name='gender' id='female' value='woman' className='registration__form-radio' />
								<div className='registration__form-radio-element'></div>
								<label htmlFor='radio-2' className='registration__form-radio-label'>Женщина</label>
							</div>
						</div>
						<div className='registration__form-textarea-wrapper'>
							<label htmlFor='textarea' className='registration__form-textarea-label'>О себе</label>
							<textarea {...register('textarea', {})} name='textarea' id='textarea' rows='10' placeholder='Расскажите о себе...'
								className='registration__form-textarea'></textarea>
						</div>
						<div className='registration__form-checkbox-wrapper'>
							<input type='checkbox' {...register('checkbox', {
								required: "Для доступа необходимо согласится с условиями использования",
							})} name='checkbox' id='update' className='registration__form-checkbox' />
							<div className='registration__form-checkbox-element'></div>
							<div className='registration__form-input_error checkbox'>
								{errors?.checkbox && <span>{errors?.checkbox?.message || "Ошибка!"}</span>}
							</div>
							<label htmlFor='update' className='registration__form-checkbox-label'>Я согласен с условиями политики конфиденциальности</label>
						</div>
						<input type='submit' id='btn' value='Регистрация' className='registration__form-btn' />
					</form>
				</div>
			</div>


			<footer className='footer reg__footer'>Все права защищены 2022 &copy;</footer>
		</div>
	)
}

export { Registration }