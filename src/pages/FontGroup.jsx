import CardHeader from '../components/CardHeader';
import Modal from '../components/Modal';
import CreateGroup from './CreateGroup';
import FontGroupTable from '../components/FontGroupTable';
import { useFontGroups } from '../hooks/useFontGroups';  // Import the custom hook

const FontGroup = () => {
    const {
        fontGroups,
        isModalOpen,
        groupToEdit,
        setIsModalOpen,
        handleDelete,
        handleEdit,
        handleEditSubmit,
    } = useFontGroups();

    return (
        <div className="container mx-auto p-6">
            <CardHeader title="Our Font Groups" subTitle="List of all available font groups." />
            <FontGroupTable
                fontGroups={fontGroups}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CreateGroup
                    editMode={true}
                    existingGroup={groupToEdit}
                    onSubmit={handleEditSubmit}
                />
            </Modal>
        </div>
    );
};

export default FontGroup;
