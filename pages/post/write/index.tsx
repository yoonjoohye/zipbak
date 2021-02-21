import React, {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import Container from "../../../components/templates/Container";
import Head from "next/head";
import useSWR from "swr";

const Wrapper = styled.main`
  padding-top: 3.5em;
`
const EmotionWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  overflow-x: auto;
`
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Box = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`
const Divider = styled.div`
  border-bottom: 1px dashed #eee;
  padding: 1.2em;
`
const StyleSelect = styled.select`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`
const StyleTextarea = styled.textarea`
  width: 100%;
  font-size: 16px;
`
const StyleInput = styled.input`
  text-align: right;
  width: 200px;
  font-size: 16px;
  font-weight: 500;
`
const RealRadio = styled.input`
  display: none;

  &:checked + span {
    border-color: #fcf0ca;
    background: #fcf0ca;
  }
`
const FakeRadio = styled.span`
  margin-right: 5px;
  display: inline-block;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 5px 10px;
`

const RealCheckbox = styled.input`
  display: none;

  &:checked + span {
    background-color: #fdd9d9;
    color: #ff0000;
  }
`
const FakeCheckbox = styled.span`
  display: inline-block;
  background-color: #eee;
  color: #aaa;
  border-radius: 5px;
  padding: 5px 10px;
`

const fetcher = (url:string) => fetch(url).then(r => r.json())

const Write = () => {
    const [category, setCategory] = useState('사건/사고');
    const [contents, setContents] = useState('');
    const [placeholder, setPlaceholder] = useState('우리집에 머선일이 생겼는지 알려주세요!');
    const [emotion, setEmotion] = useState('');
    const [floor, setFloor] = useState('');
    const [number, setNumber] = useState('');

    const { data:categoryList } = useSWR('https://api-dev.zipbak.site/category',fetcher);

    const emotionType = [
        '😍 감동이에요',
        '😭 슬퍼요',
        '🤭 놀랐어요',
        '😩 억울해요',
        '🤬 화나요'
    ]
    useEffect(() => {
        if (category === '사건/사고') {
            setPlaceholder('우리집에 머선일이 생겼는지 알려주세요!');
        }
        if (category === '질문') {
            setPlaceholder('어떤 점이 궁금한가요?');
        }
        if (category === '기타') {
            setPlaceholder('이웃들과 친해져보아요! ex) 공구하실 분, 주위 맛집 아시는 분, 도와주실 분');
        }
    }, [category]);

    const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
        console.log(e.target.value);
    }
    const changeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
        setContents(e.target.value);
        console.log(e.target.value);
    }
    const changeEmotion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEmotion(e.target.id);
        console.log(e.target.id);
    }
    const changeFloor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFloor(e.target.value);
        console.log(e.target.value);
    }
    const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
        console.log(e.target.value);
    }
    return (
        <>
            <Head>
                <title>집박구리 | 작성 페이지</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Container type="write" navigation={false} footer={false}>
                <Wrapper>
                    <Divider>
                        <StyleSelect value={category} onChange={changeCategory}>
                            <option disabled value="default">카테고리를 선택해주세요.</option>
                            {
                                categoryList && categoryList.map((item:string)=>(
                                    <option key={item.name} value={item?.name}>{item?.name}</option>
                                ))
                            }
                        </StyleSelect>
                    </Divider>
                    {
                        categoryList &&
                        category === categoryList[0].name &&
                        <>
                            <Divider>
                                <EmotionWrapper>
                                    {emotionType.map((item:string)=>(
                                        <label htmlFor={item} key={item}>
                                            <RealRadio type="radio" name="emotion" id={item} value={emotion} onChange={changeEmotion}/>
                                            <FakeRadio>{item}</FakeRadio>
                                        </label>
                                    ))}
                                </EmotionWrapper>
                            </Divider>
                            <Divider>
                                <InputWrapper>
                                    <label htmlFor="private">
                                        <RealCheckbox type="checkbox" id="private" readOnly checked={floor ? false : true}/>
                                        <FakeCheckbox>안알랴줌</FakeCheckbox>
                                    </label>
                                    <Box>
                                        <StyleInput type="number" placeholder="추정되는 층 (예시) 1" value={floor}
                                                     onChange={changeFloor}/> 층
                                        </Box>
                                </InputWrapper>
                            </Divider>

                        </>
                    }
                    {
                        categoryList &&
                        category === categoryList[2].name &&
                        <Divider>
                            <InputWrapper>
                                <label htmlFor="private"><RealCheckbox type="checkbox" id="private" readOnly
                                                                       checked={number ? false : true}/><FakeCheckbox>안알랴줌</FakeCheckbox></label>
                                <Box><StyleInput type="number" placeholder="본인 호수 (예시) 101" value={number}
                                                 onChange={changeNumber}/> 호</Box>
                            </InputWrapper>
                        </Divider>
                    }
                    <Divider>
                        <StyleTextarea rows={25} placeholder={placeholder} value={contents} onChange={changeContents}/>
                    </Divider>
                </Wrapper>
            </Container>
        </>
    )
}
export default Write;
