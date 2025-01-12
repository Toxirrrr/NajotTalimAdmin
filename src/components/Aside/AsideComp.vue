<script setup>
import './Aside.css'
</script>

<template>
    <div class="all__wrapper">
        <aside class="aside">
            <router-link class="router__active" to="/general">
                <img class="aside__logo" src="/img/logo.svg" alt="logo">
            </router-link>
            <ul class="aside__list">
                <li class="aside__item">
                    <router-link to="/general" class="aside__link">
                        <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <clipPath id="clip5_1971">
                                    <rect id="filled/action/dns" rx="0.000000" width="19.000000" height="19.000000"
                                        transform="translate(0.500000 0.500000)" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#clip5_1971)">
                                <path id="Vector"
                                    d="M16.66 10.83L3.33 10.83C2.87 10.83 2.5 11.2 2.5 11.66L2.5 16.66C2.5 17.12 2.87 17.5 3.33 17.5L16.66 17.5C17.12 17.5 17.5 17.12 17.5 16.66L17.5 11.66C17.5 11.2 17.12 10.83 16.66 10.83ZM5.83 15.83C4.91 15.83 4.16 15.08 4.16 14.16C4.16 13.25 4.91 12.5 5.83 12.5C6.75 12.5 7.5 13.25 7.5 14.16C7.5 15.08 6.75 15.83 5.83 15.83ZM16.66 2.5L3.33 2.5C2.87 2.5 2.5 2.87 2.5 3.33L2.5 8.33C2.5 8.79 2.87 9.16 3.33 9.16L16.66 9.16C17.12 9.16 17.5 8.79 17.5 8.33L17.5 3.33C17.5 2.87 17.12 2.5 16.66 2.5ZM5.83 7.5C4.91 7.5 4.16 6.75 4.16 5.83C4.16 4.91 4.91 4.16 5.83 4.16C6.75 4.16 7.5 4.91 7.5 5.83C7.5 6.75 6.75 7.5 5.83 7.5Z"
                                    fill-rule="nonzero" />
                            </g>
                        </svg>
                        <p class="aside__text">Umumiy</p>
                    </router-link>
                </li>
                <li class="aside__item">
                    <router-link to="/blocked" class="aside__link">
                        <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <clipPath id="clip5_1976">
                                    <rect id="filled/toggle/check-box" rx="0.000000" width="19.000000"
                                        height="19.000000" transform="translate(0.500000 0.500000)" fill="white"
                                      />
                                </clipPath>
                            </defs>
                            <g>
                                <rect id="filled/toggle/check-box" rx="0.000000" width="19.000000" height="19.000000"
                                    transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0" 
                                    />
                                <g clip-path="url(#clip5_1976)">
                                    <path id="Vector"
                                        d="M15.83 2.5L4.16 2.5C3.24 2.5 2.5 3.25 2.5 4.16L2.5 15.83C2.5 16.75 3.24 17.5 4.16 17.5L15.83 17.5C16.75 17.5 17.5 16.75 17.5 15.83L17.5 4.16C17.5 3.25 16.75 2.5 15.83 2.5ZM8.33 14.16L4.16 10L5.34 8.82L8.33 11.8L14.65 5.48L15.83 6.66L8.33 14.16Z"
                                        fill-opacity="1" fill-rule="nonzero" />
                                </g>
                            </g>
                        </svg>
                        <p class="aside__text">Block langanar</p>
                    </router-link>
                </li>
                <li class="aside__item">
                    <router-link to="/employees" class="aside__link">
                        <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <clipPath id="clip5_1991">
                                    <rect id="filled/social/people-alt" rx="0.000000" width="19.000000"
                                        height="19.000000" transform="translate(0.500000 0.500000)" fill-opacity="0" 
                                        />
                                </clipPath>
                            </defs>
                            <g>
                                <rect id="filled/social/people-alt" rx="0.000000" width="19.000000" height="19.000000"
                                    transform="translate(0.500000 0.500000)" fill-opacity="0"
                                     />
                                <g clip-path="url(#clip5_1991)">
                                    <path id="Vector"
                                        d="M13.89 10.94C15.03 11.71 15.83 12.76 15.83 14.16L15.83 16.66L19.16 16.66L19.16 14.16C19.16 12.35 16.19 11.27 13.89 10.94Z"
                                         />
                                    <path id="Vector"
                                        d="M10.83 6.66C10.83 8.5 9.34 10 7.5 10C5.65 10 4.16 8.5 4.16 6.66C4.16 4.82 5.65 3.33 7.5 3.33C9.34 3.33 10.83 4.82 10.83 6.66Z"
                                        />
                                    <path id="Vector"
                                        d="M12.5 10C14.34 10 15.83 8.5 15.83 6.66C15.83 4.82 14.34 3.33 12.5 3.33C12.1 3.33 11.74 3.41 11.39 3.53C12.08 4.39 12.5 5.48 12.5 6.66C12.5 7.85 12.08 8.94 11.39 9.8C11.74 9.91 12.1 10 12.5 10Z"
                                        />
                                    <path id="Vector"
                                        d="M7.5 10.83C5.27 10.83 0.83 11.95 0.83 14.16L0.83 16.66L14.16 16.66L14.16 14.16C14.16 11.95 9.72 10.83 7.5 10.83Z"
                                        />
                                </g>
                            </g>
                        </svg>
                        <p class="aside__text">Managerlar</p>
                    </router-link>
                </li>
                <li class="aside__item">
                    <router-link to="/managers" class="aside__link">
                        <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <clipPath id="clip5_2003">
                                    <rect id="filled/places/business-center" rx="0.000000" width="19.000000"
                                        height="19.000000" transform="translate(0.500000 0.500000)" fill="white"
                                        />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#clip5_2003)">
                                    <path id="Vector"
                                        d="M8.33 13.33L8.33 12.5L2.5 12.5L2.5 15.83C2.5 16.75 3.24 17.5 4.16 17.5L15.83 17.5C16.75 17.5 17.5 16.75 17.5 15.83L17.5 12.5L11.66 12.5L11.66 13.33L8.33 13.33ZM16.66 5.83L13.32 5.83L13.32 4.16L11.65 2.5L8.32 2.5L6.65 4.16L6.65 5.83L3.33 5.83C2.41 5.83 1.66 6.58 1.66 7.5L1.66 10C1.66 10.92 2.4 11.66 3.33 11.66L8.33 11.66L8.33 10L11.66 10L11.66 11.66L16.66 11.66C17.58 11.66 18.33 10.91 18.33 10L18.33 7.5C18.33 6.58 17.58 5.83 16.66 5.83ZM11.66 5.83L8.33 5.83L8.33 4.16L11.66 4.16L11.66 5.83Z" />
                                </g>
                        </svg>
                        <p class="aside__text">Hodimlar</p>
                    </router-link>
                </li>
                <li class="aside__item">
                    <router-link to="/tasks" class="aside__link">
                        <svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <clipPath id="clip5_2008">
                                    <rect id="filled/action/donut-small" rx="0.000000" width="19.000000"
                                        height="19.000000" transform="translate(0.500000 0.500000)" fill="white"
                                        />
                                </clipPath>
                            </defs>
                            <g >
                                <rect id="filled/action/donut-small" rx="0.000000" width="19.000000" height="19.000000"
                                    transform="translate(0.500000 0.500000)"  fill-opacity="0" />
                                <g clip-path="url(#clip5_2008)">
                                    <path id="Vector"
                                        d="M9.16 7.63L9.16 1.66C5 2.08 1.66 5.65 1.66 10C1.66 14.34 5 17.91 9.16 18.33L9.16 12.36C8.33 12.02 7.5 11.1 7.5 10C7.5 8.9 8.33 7.97 9.16 7.63ZM12.38 9.16L18.33 9.16C17.93 5.2 15 2.05 10.83 1.66L10.83 7.63C11.66 7.88 12.1 8.45 12.38 9.16ZM10.83 12.36L10.83 18.33C15 17.94 17.93 14.79 18.33 10.83L12.38 10.83C12.1 11.55 11.66 12.11 10.83 12.36Z"
                                        />
                                </g>
                            </g>
                        </svg>

                        <p class="aside__text">Vazifalar</p>
                    </router-link>
                </li>
            </ul>

        </aside>
        <main class="main">
            <div class="header__wrapper">
                <h2 class="header__email">manager@mail.ru</h2>
                <p class="header__text">Администратор компании</p>
            </div>
            <RouterView />
        </main>
    </div>
</template>