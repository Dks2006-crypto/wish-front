import { getOne } from "@/services/whishes.service";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import { ArrowLeft, ExternalLink, User, Tag } from "lucide-react";
import {APP_ROUTE} from "@/lib/routes/app.route";

//Страница определённого желания

interface Props {
    params: {
        id: string;
    }
}

//Константа для цвета приоритета
const getPriorityColor = (priority: string) => {
    switch (priority) {
        case "HIGH":
            return "bg-red-500 text-white";
        case "MEDIUM":
            return "bg-yellow-500 text-gray-900";
        case "LOW":
            return "bg-green-500 text-white";
        default:
            return "bg-gray-500 text-white";
    }
};

//Константа для перевода приоритета
const getPriorityText = (priority: string) => {
    switch (priority) {
        case "HIGH":
            return "Высокий";
        case "MEDIUM":
            return "Средний";
        case "LOW":
            return "Низкий";
        default:
            return priority;
    }
};

export default async function SinglePage({ params }: Props) {
    const awaitedParams = await params;
    const whish = await getOne(String(awaitedParams.id));

    return (
        <Container>
            <div className="min-h-screen py-8 px-4">
                {/* Кнопка назад */}
                <div className="mb-6">
                    <Link
                        href={APP_ROUTE.whishes.index()}
                        className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors mb-4 px-4 py-2 rounded-lg hover:bg-blue-50"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Назад к списку желаний
                    </Link>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Карточка */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden hover:shadow-3xl transition-all duration-300">
                        {/* Заголовок с статусами */}
                        <div className="p-6 border-b border-gray-700">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                        whish.completed ? "bg-green-500 text-white" : "bg-orange-500 text-white"
                                    }`}>
                                        {whish.completed ? "✅ Куплено" : "🔄 Активно"}
                                    </span>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(whish.priority)}`}>
                                        <Tag className="w-3 h-3 mr-1" />
                                        {getPriorityText(whish.priority)}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-400">
                                    ID: #{whish.id}
                                </div>
                            </div>

                            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                                {whish.title}
                            </h1>
                        </div>

                        {/* Контент */}
                        <div className="p-6 space-y-6">
                            {/* Описание */}
                            {whish.description && (
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <span>📝</span>
                                        Описание
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                                        {whish.description}
                                    </p>
                                </div>
                            )}

                            {/* Ссылка */}
                            {whish.link && (
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <span>🔗</span>
                                        Ссылка на товар
                                    </h3>
                                    <a
                                        href={whish.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors bg-gray-700/50 rounded-lg p-4 border border-gray-600 w-full group hover:bg-gray-600/50"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span className="truncate">{whish.link}</span>
                                    </a>
                                </div>
                            )}

                        </div>

                        {/* Футер */}
                        <div className="p-6 bg-gray-800 border-t border-gray-700">
                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href={`/whishes/${whish.id}/edit`}
                                    className="flex-1 min-w-[120px]"
                                >
                                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200">
                                        Редактировать
                                    </button>
                                </Link>

                                <Link
                                    href={APP_ROUTE.whishes.index()}
                                    className="flex-1 min-w-[120px]"
                                >
                                    <button className="w-full px-4 py-2 border border-gray-600 text-gray-300 hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200">
                                        К списку желаний
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Приоритет */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                            <div className="text-2xl font-bold text-white mb-1">
                                {whish.priority === "HIGH" ? "🚨" : whish.priority === "MEDIUM" ? "⚠️" : "📋"}
                            </div>
                            <div className="text-sm text-gray-400">Приоритет</div>
                            <div className="text-white font-medium">{getPriorityText(whish.priority)}</div>
                        </div>

                        {/* Статус */}
                        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                            <div className="text-2xl font-bold text-white mb-1">
                                {whish.completed ? "🎉" : "⏳"}
                            </div>
                            <div className="text-sm text-gray-400">Статус</div>
                            <div className="text-white font-medium">
                                {whish.completed ? "Выполнено" : "В процессе"}
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                            <div className="text-2xl font-bold text-white mb-1">👤</div>
                            <div className="text-sm text-gray-400">Владелец</div>
                            <div className="text-white font-medium truncate">{whish.user.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}