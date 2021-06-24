import cls from 'clsx';

import { Input, Textarea, Rating, Button } from '..';
import CrossIcon from './icons/cross.svg';

import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';

const ReviewForm: React.FC<ReviewFormProps> = ({ productId, className, ...props }) => {
    return <>
        <div className={cls(styles.form, className)} {...props}>
            <Input placeholder="Имя" />
            <Input placeholder="Заголовок отзыва" />
            <div className={styles.estimation}>
                <span className={styles.estimationLabel}>Оценка:</span>
                <Rating isEditable={true} rating={0} />
            </div>
            <Textarea className={styles.textarea} placeholder="Текст отзыва" />
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
    </>;
};

export default ReviewForm;
