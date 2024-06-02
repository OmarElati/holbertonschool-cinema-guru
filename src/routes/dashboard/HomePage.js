import './dashboard.css';
import React from "react";
import Filter from '../../components/movies/Filter';
import Tag from '../../components/movies/Tag';

export default function HomePage() {
    return (
      <div className="homepage">
        <Filter></Filter>
        <Tag></Tag>
      </div>
    )
}
