export namespace Telefrag {
/**
 * Файл
 */
export type TFileType = 'cover'|'figure'|'logo'|'back';
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
};
/**
 * Проект
 */
export type TProject = {
    id: number;
    user_id: number;
    logo_id: number | null;
    back_id: number | null;
    article_id: number | null;
    name: string;
    info: string | null;
    stage: number | null;
    genres?: number[];
    platforms?: number[];
    gallery?: number[];
    link_vk: string | null;
    link_steam: string | null;
    link_vkplay: string | null;
    link_homepage: string | null;
    link_telegram: string | null;
    link_trailer: string | null;
    link_gameplay: string | null;
    link_build: string | null;
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
export type TArticleType = 'long'|'blog'|'news'|'post';
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
    published: string;
    commented: string;
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
    replied: string|null;
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
 * Запуск (питч-сессия)
 */
export type TLaunch = {
    id: number;
    name: string;
    info: string | null;
    approval: 'auto' | 'manual';
    evaluators: 'all' | 'jury' | 'competitors';
    start: string;
    stop: string;
    after: string;
    until: string;
    created: string;
    modified: string;
    apps_total: number; // из запроса
    apps_approved: number; // из запроса
};
/**
 * Заявка на участие
 */
export type TApplication = {
    id: number;
    launch_id: number;
    project_id: number;
    rank: number;
    rating: number;
    reviews: number;
    reviewed: string;
    is_approved: boolean;
    approved: string;
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
    redirect: string; // в Open Graph этого нет, мы используем для передачи в шаблон роута для редиректа в клиенте
    content?: string; // в Open Graph этого нет, мы используем для передачи в шаблон содержимого документа, если оно есть
    wide_image?: boolean; // в Open Graph этого нет, мы используем для передачи флага о том, что надо отображать широкое превью картинки
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
 * Жалоба
 */
export type TComplaint = {
    id: number;
    from_id: number;
    assigned_id: number|null;
    due_to: string;
    about_id: number;
    about_type: 'article'|'comment'|'project'|'company'|'user';
    status: 'new'|'inprogress'|'closed';
    created: string;
};
/**
 * Отзыв
 */
export type TReview = {
    id: number;
    user_id: number;
    application_id: number;
    review_id: number|null;
    rating: number;
    comment: string;
    positive: string;
    negative: string;
    created: string;
    modified: string;
};
/**
 * Запись в таблице жюри
 */
export type TJury = {
    user_id: number;
    launch_id: number;
    rating: number;
    reviews: number;
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

} // export namespace
