import React from "react";
import { Link } from 'react-router-dom';
import './lk.css';
import { useForm } from 'react-hook-form';

const Contactspage = () => {

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
		< div className='lk__wrapper' >
			<header className='header lk__header'>
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

			<div className='lk-main'>
				<div className='lk-main__wrapper'>
					<h2 className='lk-main__title'>Обратная связь</h2>
					<form action='#' onSubmit={handleSubmit(onSubmit)} className='lk-main__form'>
						<div className='lk-main__form-input-wrapper'>
							<label htmlFor='email' className='lk-main__form-label'>Email</label>
							<input {...register('email', {
								required: "Поле обязательно для заполнения",
								pattern: {
									value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: 'Email введён некорректно'
								}
							})} id='email' type='text' name='email' placeholder='Введите Email' className='lk-main__form-input' />
							<div className='lk-main__form-input_error'>
								{errors?.email && <span>{errors?.email?.message || "Ошибка!"}</span>}
							</div>
						</div>
						<div className='lk-main__form-input-wrapper'>
							<label htmlFor='name' className='lk-main__form-label'>Пароль</label>
							<input {...register('name', {
								required: "Поле обязательно для заполнения",

							})} id='name' type='text' name='name' placeholder='Ваше имя'
								className='lk-main__form-input' />
							<div className='lk-main__form-input_error'>
								{errors?.name && <span>{errors?.name?.message || "Ошибка!"}</span>}
							</div>
						</div>
						<div className='registration__form-textarea-wrapper'>
							<label htmlFor='textarea' className='registration__form-textarea-label'>О себе</label>
							<textarea {...register('textarea', {
								required: "Поле обязательно для заполнения",
							})} name='textarea' id='textarea' rows='10' placeholder='Расскажите о себе...'
								className='registration__form-textarea'></textarea>
							<div className='lk-main__form-input_error textarea'>
								{errors?.textarea && <span>{errors?.textarea?.message || "Ошибка!"}</span>}
							</div>
						</div>
						<input type='submit' value='Отправить' className='lk-main__form-btn contact' />
					</form>

				</div>
			</div>

			<footer className='footer lk__footer'>Все права защищены 2022 &copy;</footer>
		</div >
	)

}


export { Contactspage };