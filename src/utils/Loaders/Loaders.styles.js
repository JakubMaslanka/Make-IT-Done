import styled from 'styled-components';

export const SkeletonContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin: 25px 10px;
        span{
        border-radius: 20px;
        margin-bottom: 10px;
        }`;

export const LoaderAnimation = styled.div`
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #128069;
        border-radius: 50%;
        animation: spinning 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #128069 transparent transparent transparent;
        }
        div:nth-child(1) {
        animation-delay: -0.45s;
        }
        div:nth-child(2) {
        animation-delay: -0.3s;
        }
        div:nth-child(3) {
        animation-delay: -0.15s;
        }
        @keyframes spinning {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        }`;

export const LoaderContainer = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;`;
