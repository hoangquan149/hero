import React from "react";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import './style.scss'
interface BoxContentPageProps {
    title:string;
    children: React.ReactNode;
    className:string;
}

export default function BoxContentPage(props: BoxContentPageProps) {
    const { title, children, className } = props
    return (
        <Card className={`main-page-content ${className}`}>
            <h4 className='main-page-title'>{title}</h4>
            <CardContent>
                <div className="container-fluid">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}
