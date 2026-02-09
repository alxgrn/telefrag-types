/**
 * Файл
 */
export type TFileType = 'cover' | 'figure' | 'logo' | 'back' | 'gallery';
export type TFile = {
    id: number;
    url: string|null;
    name: string;
    type: TFileType;
    mimetype: string;
    original_name: string;
    size: number;
    width: number;
    height: number;
    created: string;
    article_id: number|null;
    profile_id: number|null;
    project_id: number|null;
    company_id: number|null;
    group_id: number|null;
    launch_id: number|null;
    jam_id: number|null;
};
/**
 * Пользователь системы
 */
export type TUser = {
    id: number;
    tgid: number | null;
    email: string;
    password?: string; // Мы всегда удаляем пароль из выдачи
    is_root: boolean;
    is_blocked: boolean;
    can_jam: boolean; // Может создавать джем
    can_invite: boolean; // Может приглашать пользователей без ограничений
    restore_code?: string | null; // Мы всегда удаляем код из выдачи
    created: string;
};
/**
 * Пользовательская сессия
 */
export type TSession = {
    token: string;
    user: TUser;
    profile: TProfile;
};
/**
 * Профиль пользователя
 */
export type TProfile = {
    id: number;
    user_id: number;
    logo_id: number | null;
    back_id: number | null;
    name: string;
    info: string | null;
    city: string | null;
    country: string | null;
    projects: string | null;
    companies: string | null;
    created: string;
    modified: string;
    link_vk: string | null;
    link_homepage: string | null;
    link_telegram: string | null;
    link_donate: string | null;
    notify_newart: boolean;
    notify_newprj: boolean;
    need_jury: boolean;
    flag_chats: 'enabled' | 'disabled' | 'friends';
};
/**
 * Проект
 */
export type TProject = {
    id: number;
    user_id: number;
    logo_id: number | null;
    back_id: number | null;
    cover_id: number | null;
    article_id: number | null;
    jam_team_id: number | null;
    jam_eval_avg: number;
    jam_eval_num: number;
    name: string;
    info: string | null;
    rars: number | null;
    format: string | null;
    content: string | null;
    stage: number | null;
    genres?: number[];
    platforms?: number[];
    gallery?: number[];
    descriptors?: number[];
    link_vk: string | null;
    link_steam: string | null;
    link_vkplay: string | null;
    link_homepage: string | null;
    link_telegram: string | null;
    link_trailer: string | null;
    link_gameplay: string | null;
    link_build: string | null;
    is_autoadded: boolean;
    need_launch: boolean;
    created: string;
    modified: string;
};
/**
 * Компания
 */
export type TCompany = {
    id: number;
    user_id: number;
    logo_id: number | null;
    back_id: number | null;
    name: string;
    info: string | null;
    created: string;
    modified: string;
};
/**
 * Публикация
 */
export type TArticleType = 'long' | 'blog' | 'news' | 'post';
export type TArticle = {
    id: number;
    user_id: number;
    cover_id: number | null;
    name: string;
    info: string;
    type: TArticleType;
    format: string;
    content: string;
    comments: number;
    created: string;
    modified: string;
    published: string | null;
    commented: string | null;
    is_published: boolean;
    likes_num: number;
    likes_sum: number;
};
/**
 * Комментарий
 */
export type TComment = {
    id: number;
    user_id: number;
    article_id: number;
    reply_to: number|null;
    replies: number;
    likes: number;
    format: string;
    content: string;
    created: string;
    modified: string;
    replied: string | null;
    likes_num: number;
    likes_sum: number;
};
/**
 * Мероприятие
 */
export type TEvent = {
    id: number;
    user_id: number;
    name: string;
    info: string | null;
    homepage: string | null;
    city: string | null;
    address: string | null;
    latitude: number | null;
    longitude: number | null;
    start: string | null;
    stop: string | null;
    created: string;
    modified: string;
};
/**
 * Запуск
 */
export type TLaunch = {
    id: number;
    user_id: number;
    logo_id: number | null;
    back_id: number | null;
    cover_id: number | null;
    name: string;
    info: string | null;
    approval: 'auto' | 'manual';
    evaluators: 'all' | 'jury' | 'competitors';
    start: string; // Дата начала оценки
    stop: string; // Дата окончания оценки
    after: string; // Дата начала сбора заявок
    until: string; // Дата окончания сбора заявок
    created: string;
    modified: string;
    apps_total: number; // Из запроса - всего заявок
    apps_approved: number; // Из запроса - одобрено заявок
    reviews: number; // Из запроса - общее число оценок
    jury_total: number; // Из запроса - всего членов жюри
    jury_approved: number; // Из запроса - одобрено членов жюри
    jury_reviews?: number; // Из запроса - число отзывов члена жюри
    jury_rating?: number; // Из запроса - средняя оценка члена жюри
};
/**
 * Заявка на участие
 */
export type TApplication = {
    id: number;
    launch_id: number;
    project_id: number;
    bunch_id?: number | null; // добавляем JOIN-ом
    rank: number;
    rating: number;
    reviews: number;
    reviewed: string;
    is_approved: boolean;
    approved: string | null;
    created: string;
};
/**
 * Код приглашения
 */
export type TInvite = {
    id: number;
    from_id: number;
    to_id: number | null;
    code: string;
    created: string;
    used: string | null;
};
/**
 * Данные для Open Graph разметки
 */
export type TOpenGraph = {
    title: string;
    site_name: string;
    url: string;
    description: string;
    image: string;
    image_width: number;
    image_height: number;
    redirect: string; // В Open Graph этого нет, мы используем для передачи в шаблон роута для редиректа в клиенте
    content?: string; // В Open Graph этого нет, мы используем для передачи в шаблон содержимого документа, если оно есть
    wide_image?: boolean; // В Open Graph этого нет, мы используем для передачи флага о том, что надо отображать широкое превью картинки
};
/**
 * Стрим
 */
export type TStream = {
    id: number;
    name: string;
    weight: number;
};
/**
 * Группа
 */
export type TGroup = {
    id: number;
    user_id: number | null;
    logo_id: number | null;
    back_id: number | null;
    name: string | null;
    info: string | null;
    weight: number;
    stream_id: number | null;
    profile_id: number | null;
    project_id: number | null;
    company_id: number | null;
};
/**
 * Привязка статьи к группе
 */
export type TArticleToGroup = {
    article_id: number;
    group_id: number;
    status: 'requested' | 'approved' | 'rejected' | 'forbidden';
};

export type TArticleToGroupView = TArticleToGroup & TArticle & {
    stream_id: number | null;
    profile_id: number | null;
    project_id: number | null;
    company_id: number | null;
};
/**
 * Игровой жанр
 */
export type TGenre = {
    id: number;
    name: string;
    slug: string;
    weight: number;
};
/**
 * Игровая платформа
 */
export type TPlatform = {
    id: number;
    name: string;
    weight: number;
};
/**
 * Игровой дескриптор
 */
export type TDescriptor = {
    id: number;
    logo: string;
    name: string;
    info: string;
    weight: number;
};
/**
 * Жалоба
 */
export type TComplaint = {
    id: number;
    from_id: number;
    assigned_id: number|null;
    due_to: string;
    about_id: number;
    about_type: 'article' | 'comment' | 'project' | 'company' | 'user';
    status: 'new' | 'inprogress' | 'closed';
    created: string;
};
/**
 * Отзыв
 */
export type TReview = {
    id: number;
    user_id: number;
    application_id: number;
    review_id: number | null;
    rating: number;
    comment: string;
    positive: string;
    negative: string;
    created: string;
    modified: string;
    likes_num: number;
    likes_sum: number;
    video: string;
};
/**
 * Запись в таблице жюри
 */
export type TJury = {
    user_id: number;
    launch_id: number;
    value: number;
    rating: number;
    reviews: number;
    replies: number;
    is_approved: boolean;
    approved: string | null;
    created: string;
};
/**
 * Статус разработки
 */
export type TStage = {
    id: number;
    name: string;
    info: string;
    weight: number;
};
/**
 * Подключение к Телеграм
 */
export type TTgConnect = {
    tgid: number;
    code: string;
    first_name: string;
    last_name: string | null;
    username: string | null;
    created: string;
    used: string | null;
};
/**
 * Уведомления
 */
export type TNotificationType = 'like' | 'comment' | 'reply' | 'approve'; // Тип уведомления
export type TNotificationFromType = 'user' | 'launch'; // Тип отправителя сообщения
export type TNotificationAboutType = 'article' | 'comment' | 'application' | 'review' | 'jury'; // Тип объекта о котором происходит уведомление
export type TNotificationNew = Omit<TNotification, 'id' | 'is_new' | 'created'>; // Новое уведомление до записи в базу
export type TNotification = {
    id: number; // Идентификатор есть после записи в БД
    type: TNotificationType; // Тип уведомления
    is_new: boolean; // Является ли уведомление новым или уже было прочитано, есть после записи в БД
    to_id: number; // Для кого предназначено уведомление - user_id
    from_id: number; // Идентификатор отправителя сообщения
    from_type: TNotificationFromType; // Тип отправителя сообщения
    from_name: string | null; // Имя отправителя
    from_logo: number | null; // Логотип отправителя
    about_id: number; // Идентификатор объекта, о котором происходит уведомление
    about_type: TNotificationAboutType; // Тип объекта, о котором происходит уведомление
    about_name: string | null; // Имя объекта, о котором происходит уведомление
    about_logo: number | null; // Логотип объекта, о котором происходит уведомление
    payload: string | null; // Дополнительная информация
    created: string; // Дата создания уведомления есть после записи в БД
};
/**
 * Связка ключей доступа к проекту
 */
export type TBunch = {
    id: number;
    name: string;
    project_id: number;
    application_id: number | null;
    created: string;
};
/**
 * Ключ доступа к проекту
 */
export type TKey = {
    id: number;
    code: string;
    bunch_id: number;
    user_id: number | null;
    created: string;
    used: string | null;
};
/**
 * Бедж достижения
 * Возвращается в запросе списка беджей пользователя
 */
type TBadge = {
    user_id: number;
    badge_id: number;
    name: string;
    info: string;
    value: number;
};
/**
 * Game jam
 */
type TJam = {
    id: number;
    name: string;
    info: string | null;
    format: string | null;
    content: string | null;
    user_id: number;
    logo_id: number | null;
    back_id: number | null;
    cover_id: number | null;
    apps_start: string;
    apps_stop: string;
    proj_start: string;
    proj_stop: string;
    jury_start: string;
    jury_stop: string;
    created: string;
    modified: string;
};
/**
 * Критерии оценки джема
 */
type TJamCriteria = {
    id: number;
    name: string;
    info: string | null;
    jam_id: number;
    weight: number;
};
/**
 * Запись в таблице жюри джема
 */
export type TJamJury = {
    id: number;
    jam_id: number;
    user_id: number;
};
/**
 * Команда в джеме
 */
export type TJamTeam = {
    id: number;
    jam_id: number;
    user_id: number;
    name: string;
    info: string | null;
    is_open: boolean;
};
/**
 * Участник джема
 */
export type TJamParticipant = {
    team_id: number;
    user_id: number;
    is_approved: boolean;
};
/**
 * Оценка проекта джема
 */
export type TJamReview = {
    id: number;
    content: string;
    jury_id: number;
    project_id: number;
};
/**
 * Оценка по конкретному критерию
 */
export type TJamEvaluation = {
    review_id: number;
    criteria_id: number;
    value: number;
};

/**
 * Статистика оценка по конкретному проекту
 */
export type TJamStats = {
    project_id: number;
    criteria_id: number;
    value: number;
};

/**
 * Чат
 */
type TChatDB = {
    id: number;
    peer_id: number | null;
    user_id: number | null;
    project_id: number | null;
    company_id: number | null;
    launch_id:  number | null;
    jam_id: number | null;
    created: string;
    updated: string;
    peer_read: string;
    side_read: string;
};

type TChatWithNewMsg = TChatDB & {
    side_new: number;
    peer_new: number;
};

type TChat = TChatWithNewMsg & {
    name: string | null;
    info: string | null;
    logo_id: number | null;
    peer_name: string | null;
    peer_info: string | null;
    peer_logo: number | null;
};

/**
 * Сообщение в чате
 */
type TMessage = {
    id: number;
    chat_id: number;
    user_id: number;
    reply_to: number | null;
    format: string;
    content: string;
    created: string;
    updated: string;
};

/**
 * Типы приватных чатов
 */
type TPrivateChatType = 'user' | 'project' | 'company' | 'launch' | 'jam';

/**
 * Категория вакансии или резюме
 */
type TJobCategory = {
    id: number;
    name: string;
    weight: number;
};

/**
 * Вакансия
 */
type TVacancyDB = {
    id: number;
    project_id: number;
    category_id: number;
    name: string;
    info: string | null;
    city: string | null;
    content: string;
    work_format: 'office'|'hybrid'|'remote';
    is_commercial: boolean;
    created: string;
    updated: string;
};

type TVacancy = TVacancyDB & {
    user_id: number;
    project_name: string;
    project_logo: number | null;
};

/**
 * Инвест-профиль
 *
type TInvestProfileDB = {
    id: number;
    project_id: number;
    stage_id: number;
    idea: string; // Идея игры
    audience: string; // Целевая аудитория
    similar: string; // Похожие игры
    features: string; // Уникальные преимущества
    team: string; // Команда
    plan: string; // Что будете делать с деньгами
    created: string;
    updated: string;
}
*/