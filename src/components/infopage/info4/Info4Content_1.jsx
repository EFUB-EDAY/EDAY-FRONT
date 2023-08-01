import styled from 'styled-components';

import GreenBorder from '../../_common/GreenBorder';
import InfoContent from '../../_common/InfoContent';
import Title from '../../_common/Title';
import XBtn from '../../_common/XBtn';

import { Link } from 'react-router-dom';

const thep = () => {
    return (
        <p>
            인재개발원 온라인 서비스 -{' '}
            <a
                href='https://the.ewha.ac.kr/common/loginNSSO.jsp'
                style={{ color: '#369149' }}
            >
                //THE포트폴리오//
            </a>
            를 사용해서 다양한 취업 지원을 받을 수 있어요.
        </p>
    );
};

const coop = () => {
    return (
        <p>
            산학협력 현장실습을 통해 여러 기업에서 직무를 경험해 볼 수 있어요.
            <a
                href='https://the.ewha.ac.kr/common/loginNSSO.jsp'
                style={{ color: '#369149' }}
            >
                //현장실습 홈페이지 바로가기//
            </a>
        </p>
    );
};

const Info4Content = () => {
    const thepp = '//THE포트폴리오//';
    return (
        <div>
            {/* 나중에 연결되면 넣기 */}
            {/* <XBtn option={'info'} /> */}
            <Title num={'1.'} title={'취업/ 현장 실습 지원'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/job.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//취업/현장실습지원//'} type={'top'} />
            </Link>
            <InfoContent type={'smallDot'} text={thep()} />
            <InfoContent type={'smallDot'} text={coop()} />

            {/* 2번째 */}
            <Title num={'2.'} title={'학술 지원'} />
            <GreenBorder />

            <Link
                to='https://www.ewha.ac.kr/ewha/life/academic.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//학술 지원//'} type={'top'} />
            </Link>

            <InfoContent
                text={
                    'ewha dna lab, 글로벌 프론티어, 도전학기 등 장학금을 받고 활동할 수 있는 프로그램들이 많아요. 경험도 쌓고 스펙도 쌓고 돈도 들지 않으니 일석 삼조!'
                }
            />

            {/* 3번째 */}
            <Title num={'3.'} title={'상담 지원'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/counseling.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//상담 지원//'} type={'top'} />
            </Link>
            <InfoContent
                type={'smallDot'}
                text={
                    '심리 상담 : 개인 상담, 집단 상담, 심리 검사, MBTI 검사, 각종 심리교육 등을 제공해요! 유레카에서 신청할 수 있답니다.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '인권 상담 : 인권 침해, 위계에 따른 부당한 괴롭힘, 차별행위, 성희롱, 성폭력 등 발생 시 상담을 받을 수 있어요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '의료 상담 : 대학건강센터는 학생과 교직원의 건강한 대학 생활을 위한 건강/의료 서비스를 제공해요.'
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '법률 상담 : 이화 법조인회의 이화여대 출신 선배님들께 무료로 법률 상담도 받을 수 있어요!'
                }
            />

            {/* 4번 */}
            <Title num={'4.'} title={'행사 지원'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/event.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//행사 지원//'} type={'top'} />
            </Link>
            <InfoContent
                type={'smallDot'}
                text={
                    '시험 기간 밤새는 벗들을 위해 시험 기간 3일 동안 아침 식사를 제공해요! '
                }
            />
            <InfoContent
                type={'smallDot'}
                text={
                    '매년 입학식 직후 이화 동문 선배님들의 이화에서의 대학 생활을 들을 수 있는 신입생 환영 행사가 열려요!'
                }
            />

            {/* 5번 */}
            <Title num={'5.'} title={'고시 지원'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/exam.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//고시 지원//'} type={'top'} />
            </Link>

            <InfoContent
                text={
                    '고시를 생각하는 벗들 모여라!! 행정고시, 언론고시, 기술고시 등등 다양한 고시반이 있어요.'
                }
            />

            {/* 6번 */}
            <Title num={'6.'} title={'장애 학생 지원'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/student-service.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent text={'//장애 학생 지원//'} type={'top'} />
            </Link>

            <InfoContent
                text={
                    '장애 학생의 원활한 학교생활을 위해 다양한 교육 복지 서비스를 제공하고 있어요. 특별 수강 신청, 수업 도우미, 기숙사 우선 배정 등 다양한 지원이 있으니 꼭 확인해 보세요!'
                }
            />

            {/* 7번 */}
            <Title num={'7.'} title={'북한 이탈주민 학생 지원'} />
            <GreenBorder />
            <Link
                to='https://www.ewha.ac.kr/ewha/life/north-korean-defectors.do'
                style={{ color: '#369149' }}
            >
                {' '}
                <InfoContent
                    text={'//북한 이탈주민 학생 지원//'}
                    type={'top'}
                />
            </Link>

            <InfoContent
                text={
                    '계절학기 수업료 지원, 영어 특강, 튜터링 프로그램 등 다양한 지원을 받을 수 있어요!'
                }
            />
            <InfoContent text={'  '} />
        </div>
    );
};

export default Info4Content;
