import { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import cls from 'clsx';

import { Input, Textarea, Rating, Button } from '..';
import CrossIcon from './icons/cross.svg';

import { IReviewForm, IReviewSentResponse } from './ReviewForm.inderface';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import { API } from '../../helpers/api';

const ReviewForm: React.FC<ReviewFormProps> = ({ productId, className, ...props }) => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');
    const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();

    const onSubmit = async (formData: IReviewForm) => {
        setError('');
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const onClickCloseSuccess = useCallback(() => {
        setIsSuccess(false);
    }, [setIsSuccess]);

    const onClickCloseError = useCallback(() => {
        setError('');
    }, [setError]);

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls(styles.form, className)} {...props}>
            <Input
                {...register('name', { required: { value: true, message: 'Укажите имя' } })}
                error={errors.name} placeholder="Имя"
                aria-invalid={errors.name ? true : false}
            />
            <Input
                {...register('title', { required: { value: true, message: 'Укажите заголовок' } })}
                error={errors.title} placeholder="Заголовок отзыва"
                aria-invalid={errors.title ? true : false}
            />
            <div className={styles.estimation}>
                <span className={styles.estimationLabel}>Оценка:</span>
                <Controller
                    control={control}
                    name="rating"
                    rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                    render={({ field }) => <Rating isEditable={true} error={errors.rating} ref={field.ref} rating={field.value} setRating={field.onChange} />}
                />
            </div>
            <Textarea
                {...register('description', { required: { value: true, message: 'Укажите описание' } })}
                error={errors.description}
                className={styles.textarea}
                placeholder="Текст отзыва"
                aria-label="Текст отзыва"
                aria-invalid={errors.description ? true : false}
            />
            <div className={styles.submit}>
                <Button type="submit" onClick={() => clearErrors}>Отправить</Button>
                <span className={styles.submitLegend}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
        </div>
        {isSuccess && <div className={cls(styles.success, styles.panel)}>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <div className={styles.successMessage}>
                Спасибо, ваш отзыв будет опубликован после проверки
            </div>
            <button className={styles.panelClose} onClick={onClickCloseSuccess}><CrossIcon /></button>
        </div>}
        {error && <div className={cls(styles.error, styles.panel)}>
            {error}
            <button className={cls(styles.panelClose, styles.errorClose)} onClick={onClickCloseError}><CrossIcon /></button>
        </div>}
    </form>;
};

export default ReviewForm;
