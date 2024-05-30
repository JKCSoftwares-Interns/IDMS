import { motion } from 'framer-motion';

const PageAnimate = ({ children, className }) => {
    return (
        <motion.div
            initial={{ y: "-100px", }}
            animate={{ y: "0px", }}
            transition={{
                type: "spring",
                duration: 1,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default PageAnimate;