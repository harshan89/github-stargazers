import React, { useEffect, useState, useRef } from "react";
import { useQuery, gql } from "@apollo/client";
import { REPOSITORIES } from "../GraphQL/Queries";
import { kFormatter, findTimeInterval } from "../Utills/formatters";

function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    const [first, setFirst] = useState(10);
    const [cursor, setCursor] = useState(null);
    const listInnerRef = useRef();

    const { error, data, loading, fetchMore } = useQuery(REPOSITORIES, {
        variables: {
            first: first,
            after: cursor
        },
    });

    const onScroll = () => {
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

            if (scrollTop + clientHeight === scrollHeight) {
                fetchMore({
                    variables: {
                        after: repositories[repositories.length -1].cursor,
                    },
                    updateQuery: (prevResult, { fetchMoreResult }) => {
                        if (!fetchMoreResult.search.edges)
                            return prevResult;

                        const _repositories = [...repositories, ...fetchMoreResult.search.edges,];
                        setRepositories(_repositories);
                    }
                });
            }
        }
    };

    useEffect(() => {
        if (data) {
            setRepositories(data.search.edges);
        }
    }, [data]);

    return(
        <div className="repo-list" onScroll={() => onScroll()} ref={listInnerRef}>

            {loading && <h1 className="loadingText">Loading</h1>}

            {repositories.length > 0 && repositories.map((repository, key) => {
                const node = repository.node;

                return <div className="product-list-wrapper">
                    <div key={key} className="repo-card">
                        <div className="image-holder">
                            <img src={node.openGraphImageUrl} alt=""/>
                        </div>
                        <div className="repo-info">
                            <h1>{node.name}</h1>
                            <p>{`${node.description.substring(0, 100)}`}</p>
                            <div className='issues-stars'>
                                <label>Start: {kFormatter(node.stargazers.totalCount)}</label>
                                <label>Issues: {kFormatter(node.issues.totalCount)}</label>
                                <p>Submitted {findTimeInterval(node.updatedAt)} by {node.owner.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default RepositoryList;