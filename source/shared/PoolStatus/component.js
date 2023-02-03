const PoolStatus = ({ poolStatus }) => poolStatus === 'active' ?
    <a style={{ color: 'green', fontWeight: 600 }}>
        {poolStatus}
    </a>
    :
    <a style={{ color: 'red', fontWeight: 600 }}>
        {poolStatus}
    </a>

export default PoolStatus;
