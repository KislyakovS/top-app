import { Controller, useForm } from 'react-hook-form';
import cls from 'clsx';

import { Input, Textarea, Rating, Button } from '..';
import CrossIcon from './icons/cross.svg';

import { IReviewForm } from './ReviewForm.inderface';
import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';

const ReviewForm: React.FC<ReviewFormProps> = ({ productId, className, ...props }) => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls(styles.form, className)} {...props}>
            <Input {...register('name', { required: { value: true, message: 'Укажите имя' } })} error={errors.name} placeholder="Имя" />
            <Input {...register('title', { required: { value: true, message: 'Укажите заголовок' } })} error={errors.title} placeholder="Заголовок отзыва" />
            <div className={styles.estimation}>
                <span className={styles.estimationLabel}>Оценка:</span>
                <Controller
                    control={control}
                    name="rating"
                    rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                    render={({ field }) => <Rating isEditable={true} error={errors.rating} ref={field.ref} rating={field.value} setRating={field.onChange} />}
                />
            </div>
            <Textarea {...register('description', { required: { value: true, message: 'Укажите описание' } })} error={errors.description} className={styles.textarea} placeholder="Текст отзыва" />
            <div className={styles.submit}>
                <Button>Отправить</Button>
                <span className={styles.submitLegend}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
        </div>
        <div className={styles.success}>
            <div className={styles.successTitle}>Ваш отзыв отправлен</div>
            <div className={styles.successMessage}>
                Спасибо, ваш отзыв будет опубликован после проверки
            </div>
            <button className={styles.successClose}><CrossIcon /></button>
        </div>
    </form>;
};

export default ReviewForm;
